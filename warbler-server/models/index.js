const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
//mongoose.connect("mongodb://localhost/warbler", {

  //keepAlive: true
//});

//mongoose.connect("mongodb://localhost:27017/warbler", { keepAlive: true });
mongoose.connect("mongodb://localhost:27017/warbler", { useNewUrlParser: true });
module.exports.User = require("./user");
module.exports.Message = require("./message");

//Make sure your mongo db is running and that you're connecting to the db via port 27017. When Elie was initially casting, he didn't add the port to the models/index.js file.

//{ useNewUrlParser: true } to MongoClient.connect.
