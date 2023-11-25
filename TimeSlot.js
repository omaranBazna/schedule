let db = new sqlite3.Database('./scheduleApp.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the SQLite database.');

    // Create the Time_Slot table
    db.run(`CREATE TABLE IF NOT EXISTS Time_Slot (
      Time_Slot_ID INTEGER PRIMARY KEY AUTOINCREMENT,
      Start_Time DATETIME NOT NULL,
      End_Time DATETIME NOT NULL
    )`, (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Time_Slot table created successfully.");
        }
    });

    // the code below maybe need it one time when all tables become togather in one script

    // Close the database connection
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Closed the database connection.');
    });
});
