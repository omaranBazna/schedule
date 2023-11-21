const express = require("express");
const router = express.Router();
const Model = require("../models/professors");

router.get("/", Model.renderPage);
router.get("/professors", Model.getProfessors);
router.post("/", Model.addProfessor);

module.exports = router;
