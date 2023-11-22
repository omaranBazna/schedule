const express = require("express");
const router = express.Router();
const Model = require("../models/courses");

router.get("/", Model.renderPage);

module.exports = router;
