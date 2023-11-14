
let courses=[
  {
    major:'CompSci'
  },
  {
    major:"EE"
  },
  {
    major:"Robotics"
  }
]
function getCoursesPage(req,res){
  res.render("courses")
}
function getCourses(req,res){
  res.json(courses);
}

function getCourse(req,res){
  const id=req.params.id

  res.json(courses[id])
}

function deleteCourse(req,res){
  res.send("delete Course")
}

function updateCourse(req,res){
  res.send("Update course")
}
function addCourse(req,res){
 res.end(); 
}
module.exports={
  getCourses,
  getCourse,
  addCourse,
  deleteCourse,
  updateCourse,
  getCoursesPage
}