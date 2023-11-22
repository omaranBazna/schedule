const express = require("express");
const router = express.Router();
const Model = require("../models/courses");

router.get("/", Model.renderPage);
router.post("/",Model.addCourse)
module.exports = router;
