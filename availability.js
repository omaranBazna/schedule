// Assuming db is already defined and connected to your SQLite database

// Create the availability table
db.run(`CREATE TABLE IF NOT EXISTS availability (
    Ava_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Prof_ID INTEGER NOT NULL,
    Cour_ID INTEGER NOT NULL,
    TSlot_ID INTEGER NOT NULL,
    Professor_Ava DATETIME NOT NULL,
    Availability_Type BOOLEAN NOT NULL, 
    FOREIGN KEY (Prof_ID) REFERENCES professor(Professor_ID),
    FOREIGN KEY (Cour_ID) REFERENCES course(Course_ID),
    FOREIGN KEY (TSlot_ID) REFERENCES time_slot(Time_Slot_ID)
  )`, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Availability table created successfully.");
    }
  });
  
  // Function to add a new availability
  function addAvailability(Prof_ID, Cour_ID, TSlot_ID, Professor_Ava, Availability_Type) {
    const sql = `INSERT INTO availability (Prof_ID, Cour_ID, TSlot_ID, Professor_Ava, Availability_Type) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [Prof_ID, Cour_ID, TSlot_ID, Professor_Ava, Availability_Type], function(err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`A new availability entry has been inserted with Ava_ID ${this.lastID}`);
    });
  }
  
  // Function to update an availability entry
  function updateAvailability(Ava_ID, Prof_ID, Cour_ID, TSlot_ID, Professor_Ava, Availability_Type) {
    const sql = `UPDATE availability SET Prof_ID = ?, Cour_ID = ?, TSlot_ID = ?, Professor_Ava = ?, Availability_Type = ? WHERE Ava_ID = ?`;
    db.run(sql, [Prof_ID, Cour_ID, TSlot_ID, Professor_Ava, Availability_Type, Ava_ID], function(err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Availability entry updated with Ava_ID ${Ava_ID}`);
    });
  }
  
  // Function to delete an availability entry
  function deleteAvailability(Ava_ID) {
    const sql = `DELETE FROM availability WHERE Ava_ID = ?`;
    db.run(sql, Ava_ID, function(err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Availability entry deleted with Ava_ID ${Ava_ID}`);
    });
  }
  // Availability_Type (online or In-person)
  // Example usage:
  // addAvailability(1, 101, 201, '2023-09-01 10:00:00', In-person);
  // updateAvailability(1, 1, 101, 201, '2023-09-01 10:00:00', In-person);
  // deleteAvailability(1);
  