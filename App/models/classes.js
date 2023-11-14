
let classes={
1:[
  "CompSci 101",
  "CompSci 202"
],
2:[
  "EE 101",
  "EE 114"
],
3:[
  "R 101",
  "R 102"
]
  
}

function getClassPage(req,res){
  res.render("classes")
}

function getClasses(req,res){
const id=req.params.id
let arr=classes[id]

  res.json(arr);

  
}
function classForm(req,res){
  res.render("addClass")
}

function addClass(req,res){
  
}

module.exports={
  getClasses,
  classForm,
  addClass,
  getClassPage
}