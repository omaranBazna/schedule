// Create the course table
db.run(`CREATE TABLE IF NOT EXISTS course (
    CourseID INTEGER PRIMARY KEY AUTOINCREMENT,
    Major TEXT NOT NULL,
    Course_Name TEXT NOT NULL,
    Course_Code TEXT NOT NULL,
    Course_Type TEXT NOT NULL,
    Elective BOOLEAN NOT NULL,
    Course_Iteration_Weekly INTEGER NOT NULL,
    Course_Duration TEXT NOT NULL,
    Course_Year INTEGER NOT NULL,
    Need_Lab BOOLEAN NOT NULL
  )`, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Course table created successfully.");
    }
});

// Function to add a new course
function addCourse(Major, Course_Name, Course_Code, Course_Type, Elective, Course_Iteration_Weekly, Course_Duration, Course_Year, Need_Lab) {
    const sql = `INSERT INTO course (Major, Course_Name, Course_Code, Course_Type, Elective, Course_Iteration_Weekly, Course_Duration, Course_Year, Need_Lab) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.run(sql, [Major, Course_Name, Course_Code, Course_Type, Elective, Course_Iteration_Weekly, Course_Duration, Course_Year, Need_Lab], function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
}

// Function to update a course's details
function updateCourse(CourseID, Major, Course_Name, Course_Code, Course_Type, Elective, Course_Iteration_Weekly, Course_Duration, Course_Year, Need_Lab) {
    const sql = `UPDATE course SET Major = ?, Course_Name = ?, Course_Code = ?, Course_Type = ?, Elective = ?, Course_Iteration_Weekly = ?, Course_Duration = ?, Course_Year = ?, Need_Lab = ? WHERE CourseID = ?`;
    db.run(sql, [Major, Course_Name, Course_Code, Course_Type, Elective, Course_Iteration_Weekly, Course_Duration, Course_Year, Need_Lab, CourseID], function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`Row(s) updated: ${this.changes}`);
    });
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

// Example if need:
//addCourse('EE', 'ML', '5050', 'In-person', false, 2, '1:50 hr', greduate, false);
// updateCourse(EE, 'ML', '5053', 'In-person', false, 2, '1:50 hr', greduate, false);
// deleteCourse(1);
