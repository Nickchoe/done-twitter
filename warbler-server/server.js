const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

//app.listen(process.env.PORT, process.env.IP, function() {
  //console.log("Server started!");
//});

//app.listen(process.env.PORT, process.env.IP, function(){
   //console.log("The Warbler Server Has Started!");
//});

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});