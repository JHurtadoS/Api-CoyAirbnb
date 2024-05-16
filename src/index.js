const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Hi");
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function () {
  console.log(__dirname);

  console.log("Server is running on 8080");
});
