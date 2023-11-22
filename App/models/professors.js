const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "database", "sql-server", "database.db");

let db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the SQLite database.");
});

// Function to add a new professor
function addProfessor(req, res) {
  let { fname, lname, type, seniority } = req.body;
  const sql = `INSERT INTO professor (Fname, Lname, Professor_Type, Seniority) VALUES (?,?,?,?)`;
  db.run(sql, [fname, lname, type, seniority], function (err) {
    if (err) {
      return res.send(err.message);
    }
    res.end();
  });
}

// Function to update a professor's details
function updateProfessor(ProfessorID, Fname, Lname, Professor_Type, Seniority) {
  const sql = `UPDATE professor SET Fname = ?, Lname = ?, Professor_Type = ?, Seniority = ? WHERE ProfessorID = ?`;
  db.run(
    sql,
    [Fname, Lname, Professor_Type, Seniority, ProfessorID],
    function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Row(s) updated: ${this.changes}`);
    }
  );
}

// Function to delete a professor
function deleteProfessor(ProfessorID) {
  const sql = `DELETE FROM professor WHERE ProfessorID = ?`;
  db.run(sql, ProfessorID, function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) deleted: ${this.changes}`);
  });
}

function renderPage(req, res) {
  const sql = `select * from professor`;
  db.all(sql, function (err, rows) {
    if (err) {
      return res.send(err.message);
    }
    console.log(rows);
    res.render("professors", {
      rows: rows ? rows : [],
    });
  });
}
module.exports = {
  renderPage,

  updateProfessor,
  deleteProfessor,
  addProfessor,
};
