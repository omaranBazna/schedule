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
function addProfessor(Fname, Lname, Professor_Type, Seniority) {
  const sql = `INSERT INTO professor (Fname, Lname, Professor_Type, Seniority) VALUES (rami, n, full time, 2)`;
  db.run(sql, [Fname, Lname, Professor_Type, Seniority], function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
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

// Example usage:
addProfessor("John", "Doe", "Full-Time", 5);
// updateProfessor(1, 'Jane', 'Smith', 'Part-Time', 3);
// deleteProfessor(1);

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Closed the database connection.");
});

function renderPage(req, res) {
  res.render("professors");
}
module.exports = {
  renderPage,
};
