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

INSERT INTO course (Major, Course_Name, Course_Code, Course_Type, Elective, Course_Iteration_Weekly, Course_Duration, Course_Year) VALUES ('EE', 'MATH (mathematics)', '1420-02', 'In Person', 0, 1, '10:00-11:00', 1);
INSERT INTO course (Major, Course_Name, Course_Code, Course_Type, Elective, Course_Iteration_Weekly, Course_Duration, Course_Year) VALUES ('EE', 'MATH (mathematics)', '1420-03', 'In Person', 0, 1, '6:30-8:30', 1);
INSERT INTO course (Major, Course_Name, Course_Code, Course_Type, Elective, Course_Iteration_Weekly, Course_Duration, Course_Year) VALUES ('EE', 'PHY (Physics)', '1610-01', 'In Person', 0, 1, '2:00-5:00', 1);
INSERT INTO course (Major, Course_Name, Course_Code, Course_Type, Elective, Course_Iteration_Weekly, Course_Duration, Course_Year) VALUES ('EE', 'ELEE', '5350-01', 'In Person', 0, 1, '5:15-6:30', 1);

INSERT INTO professor (Fname, Lname, Professor_Type, Seniority)
VALUES ('Shadi', 'Bani Taan', 'Full-time', 7);

INSERT INTO professor (Fname, Lname, Professor_Type, Seniority)
VALUES ('Kathy', 'Zhong', 'Full-time', 5);

INSERT INTO professor (Fname, Lname, Professor_Type, Seniority)
VALUES ('Mariam', 'Faied', 'Full-time', 8);

INSERT INTO professor (Fname, Lname, Professor_Type, Seniority)
VALUES ('Jonathan', 'Weaver', 'adjunct', 2);

INSERT INTO professor (Fname, Lname, Professor_Type, Seniority)
VALUES ('James', 'Lynch', 'adjunct', 1);
