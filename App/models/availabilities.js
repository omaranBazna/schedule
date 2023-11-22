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

function renderPage(req, res) {
  res.render("availabilities");
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
  console.log(slots);
  return res.send(req.body);

  let sql = `INSERT INTO availability (Availability_Duration, Availability_Type, Prof_ID, Cour_ID, TSlot_ID)
              VALUES (?, ?, ?, ?, ?)`;

  // Example data
  let data = [
    Availability_Duration,
    Availability_Type,
    Prof_ID,
    Cour_ID,
    TSlot_ID,
  ];

  return res.send(data);

  // Run insert statement
  db.run(sql, data, function (err) {
    if (err) {
      console.error(err.message);
    }
    res.end();
  });
}

module.exports = {
  renderPage,
  addAvailability,
};
