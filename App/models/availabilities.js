const slots = require("../utils/slots.js");

const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "database", "sql-server", "database.db");

let db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the SQLite database.");
});

// Function to get professor information based on ProfessorID
const getProfessorInfo = (professorId) =>
  new Promise((resolve, reject) => {
    let sql = "SELECT Fname, Lname FROM professor WHERE ProfessorID = ?";
    db.all(sql, [professorId], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows[0].Fname + " " + rows[0].Lname);
      }
    });
  });

// Function to get course information based on CourseID
const getCourseInfo = (courseId) =>
  new Promise((resolve, reject) => {
    let sql = "SELECT Course_Name, Course_Code FROM course WHERE CourseID = ?";
    db.all(sql, [courseId], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows[0].Course_Name + " " + rows[0].Course_Code);
      }
    });
  });
let result = [];
const renderPage = (req, res) => {
  let sql = "SELECT * FROM availability";

  db.each(
    sql,
    async (err, row) => {
      if (err) {
        console.error(err.message);
      } else {
        try {
          // Fetch professor and course information asynchronously
          let professorInfo = await getProfessorInfo(row.Prof_ID);
          let courseInfo = await getCourseInfo(row.Cour_ID);

          // Update the row with professor and course information
          row.Prof_ID = professorInfo;
          row.Cour_ID = courseInfo;

          // Add the updated row to the result array
          result.push(row);
        } catch (error) {
          console.error(error.message);
        }
      }
    },
    () => {
      AddProfessors(req, res);
    }
  );
};

function AddProfessors(req, res) {
  let sql = "select ProfessorID,Fname,Lname from professor";
  db.all(sql, (err, prof) => {
    let sql2 = "select  CourseID,Course_Name,Course_Code from course";
    db.all(sql2, (err, course) => {
      console.log(prof);
      res.render("availabilities", {
        rows: result,
        course: course,
        prof: prof,
      });
      result = [];
    });
  });
}

function addAvailability(req, res) {
  let {
    Availability_Duration,
    Availability_Type,
    Prof_ID,
    Cour_ID,
    time,
    day,
  } = req.body;

  let element = slots.find(
    (item) => item.day.indexOf(day) > -1 && item.time.indexOf(time) > -1
  );
  let TSlot_ID = element.id;

  let sql = `INSERT INTO availability (Availability_Duration, Availability_Type, Prof_ID, Cour_ID, TSlot_ID)
              VALUES (?, ?, ?, ?, ?)`;

  let data = [
    Availability_Duration,
    Availability_Type,
    Prof_ID,
    Cour_ID,
    TSlot_ID,
  ];

  db.run(sql, data, function (err) {
    if (err) {
      console.error(err.message);
    }
    res.redirect("/classes");
  });
}

module.exports = {
  renderPage,
  addAvailability,
};
