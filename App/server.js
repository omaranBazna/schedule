const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());
///route to add classes
/*
this route is for Admins and schedule organizors
to add and drop classes
*/
app.get("/", function (req, res) {
  res.render("index");
});

app.use("/classes", require("./controllers/availabilities"));
app.use("/courses", require("./controllers/courses"));
app.use("/professors", require("./controllers/professors"));
app.use("/availabilities", require("./controllers/availabilities"));
app.use("/schedule", require("./controllers/schedule"));

app.listen(port, () => {
  // Code.....
});
