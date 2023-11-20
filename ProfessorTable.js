const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./scheduleApp.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// Create the professor table
db.run(`CREATE TABLE IF NOT EXISTS professor (
  ProfessorID INTEGER PRIMARY KEY AUTOINCREMENT,
  Fname TEXT NOT NULL,
  Lname TEXT NOT NULL,
  Professor_Type TEXT NOT NULL,
  Seniority INTEGER NOT NULL
)`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Professor table created successfully.");
  }
});

// Function to add a new professor
function addProfessor(Fname, Lname, Professor_Type, Seniority) {
  const sql = `INSERT INTO professor (Fname, Lname, Professor_Type, Seniority) VALUES (rami, n, full time, 2)`;
  db.run(sql, [Fname, Lname, Professor_Type, Seniority], function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });
}

// Function to update a professor's details
function updateProfessor(ProfessorID, Fname, Lname, Professor_Type, Seniority) {
  const sql = `UPDATE professor SET Fname = ?, Lname = ?, Professor_Type = ?, Seniority = ? WHERE ProfessorID = ?`;
  db.run(sql, [Fname, Lname, Professor_Type, Seniority, ProfessorID], function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) updated: ${this.changes}`);
  });
}

// Function to delete a professor
function deleteProfessor(ProfessorID) {
  const sql = `DELETE FROM professor WHERE ProfessorID = ?`;
  db.run(sql, ProfessorID, function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) deleted: ${this.changes}`);
  });
}

// Example usage:
addProfessor('John', 'Doe', 'Full-Time', 5);
// updateProfessor(1, 'Jane', 'Smith', 'Part-Time', 3);
// deleteProfessor(1);

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Closed the database connection.');
});
