// Create the course table
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "database", "sql-server", "database.db");

let db = new sqlite3.Database(
  dbPath,
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the SQLite database.");
  }
);

// Function to add a new course
function addCourse(
  Major,
  Course_Name,
  Course_Code,
  Course_Type,
  Elective,
  Course_Iteration_Weekly,
  Course_Duration,
  Course_Year,
  Need_Lab
) {
  const sql = `INSERT INTO course (Major, Course_Name, Course_Code, Course_Type, Elective, Course_Iteration_Weekly, Course_Duration, Course_Year, Need_Lab) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  db.run(
    sql,
    [
      Major,
      Course_Name,
      Course_Code,
      Course_Type,
      Elective,
      Course_Iteration_Weekly,
      Course_Duration,
      Course_Year,
      Need_Lab,
    ],
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }
  );
}

// Function to update a course's details
function updateCourse(
  CourseID,
  Major,
  Course_Name,
  Course_Code,
  Course_Type,
  Elective,
  Course_Iteration_Weekly,
  Course_Duration,
  Course_Year,
  Need_Lab
) {
  const sql = `UPDATE course SET Major = ?, Course_Name = ?, Course_Code = ?, Course_Type = ?, Elective = ?, Course_Iteration_Weekly = ?, Course_Duration = ?, Course_Year = ?, Need_Lab = ? WHERE CourseID = ?`;
  db.run(
    sql,
    [
      Major,
      Course_Name,
      Course_Code,
      Course_Type,
      Elective,
      Course_Iteration_Weekly,
      Course_Duration,
      Course_Year,
      Need_Lab,
      CourseID,
    ],
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Row(s) updated: ${this.changes}`);
    }
  );
}

// Function to delete a course
function deleteCourse(CourseID) {
  const sql = `DELETE FROM course WHERE CourseID = ?`;
  db.run(sql, CourseID, function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) deleted: ${this.changes}`);
  });
}

function renderPage(req, res) {
  res.render("courses");
}

function getCourses(req,res){
  const sql = `select * from professor`;
  db.run(sql, function (err, rows) {
    if (err) {
      return res.send(err.message);
    }
    res.send({ rows });
  });
}

module.exports = {
  renderPage,
};
