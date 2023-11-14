const express=require("express")
const router=express.Router();
const Model=require("../models/courses")
router.get("/",Model.getCoursesPage)
router.get("/api/courses/",Model.getCourses)
router.get("/api/courses/:id",Model.getCourse)
router.post("/api/course",Model.addCourse)
router.put("/api/courses/:id",Model.updateCourse)
router.delete("/api/courses/:id",Model.deleteCourse)



module.exports=router