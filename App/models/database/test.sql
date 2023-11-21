 -- sql command for creating professor table 
CREATE TABLE professor (
  ProfessorID INTEGER PRIMARY KEY AUTOINCREMENT,
  Fname TEXT NOT NULL,
  Lname TEXT NOT NULL,
  Professor_Type TEXT NOT NULL,
  Seniority INTEGER NOT NULL
)

CREATE TABLE  course (
    CourseID INTEGER PRIMARY KEY AUTOINCREMENT,
    Major TEXT NOT NULL,
    Course_Name TEXT NOT NULL,
    Course_Code TEXT NOT NULL,
    Course_Type TEXT NOT NULL,
    Elective BOOLEAN NOT NULL,
    Course_Iteration_Weekly INTEGER NOT NULL,
    Course_Duration TEXT NOT NULL,
    Course_Year INTEGER NOT NULL
  );
CREATE TABLE availability (
    Ava_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Availability_Duration TEXT NOT NULL,
    Availability_Type BOOLEAN NOT NULL,
    Prof_ID INTEGER, 
    Cour_ID INTEGER,
    TSlot_ID INTEGER
);

CREATE TABLE Time_Slot (
      Time_Slot_ID INTEGER PRIMARY KEY AUTOINCREMENT,
      Start_Time DATETIME NOT NULL
  )

 ---sqlite3 , sql
 --sql 