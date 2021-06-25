const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("It Worked!");
});

app.listen(5000, function () {
  console.log("suceess");
});
