const express = require("express");
const router = express.Router();
const Model = require("../models/professors");

router.get("/", Model.renderPage);

module.exports = router;
