function renderPage(req, res) {
  res.render("availabilities");
}

function addAvailability(req, res) {
  let { Availability_Duration, Availability_Type, Prof_ID, Cour_ID, TSlot_ID } =
    req.body;
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
