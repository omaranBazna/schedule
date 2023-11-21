const express = require("express");
const router = express.Router();
const Model = require("../models/availabilities.js");
router.get("/", Model.renderPage);
router.post("/", Model.addAvailability);

module.exports = router;
