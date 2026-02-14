const express = require("express");
const app = express();
const PORT = 3001;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/VolCalculator.html");
});

// on: load page req
// get -> res send volCalc html file
app.get("/VolCalc", function (req, res) {
  res.sendFile(__dirname + "/VolCalculator.html");
});

// on: form submit button
// post -> calculate volume, show as field on webpage
app.post("/VolCalc", function (req, res) {
  let pi = Math.PI;
  let r = parseFloat(req.body.radius);
  let h = parseFloat(req.body.height);

  let vol = pi * Math.pow(r, 2) * h;

  // display as field on webpage
  //format result to 2 decimal places
  res.send(`Volume = ${vol.toFixed(2)}`);
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
