const express=require("express")
const router=express.Router();
const Model=require("../models/professors")

router.get("/",Model.getProfessorsPage)


module.exports=router