const express = require("express");
const router = express.Router();
const Model = require("../models/professors");

router.get("/", Model.renderPage);

router.post("/", Model.addProfessor);

module.exports = router;
