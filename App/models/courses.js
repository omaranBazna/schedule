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
function addCourse(req, res) {
  let {
    Major,
    Course_Name,
    Course_Code,
    Course_Type,
    Elective,
    Course_Iteration_Weekly,
    Course_Duration,
    Course_Year,
  } = req.body;
  console.log(req.body);
  const sql = `INSERT INTO course (Major, Course_Name, Course_Code, Course_Type, Elective, Course_Iteration_Weekly, Course_Duration, Course_Year) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
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
    ],

    function (err) {
      if (err) {
        return res.send(err.message);
      }
      res.redirect("/");
    }
  );
}

function renderPage(req, res) {
  const sql = `select * from course`;
  db.all(sql, function (err, rows) {
    if (err) {
      return res.send(err.message);
    }
    res.render("courses", { rows });
  });
}

module.exports = {
  renderPage,
  addCourse,
};
