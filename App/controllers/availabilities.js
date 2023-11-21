const express = require("express");
const router = express.Router();
const Model = require("../models/availabilities.js");
router.get("/", Model.renderPage);

module.exports = router;
