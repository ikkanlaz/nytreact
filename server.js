const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

// if (process.env.PORT) {
//     mongoose.connect("mongodb://heroku_hr6f4dkz:4go012qv1p7lugedt40mqq4e0d@ds141514.mlab.com:41514/heroku_hr6f4dkz");
// } else {
//     mongoose.connect("mongodb://localhost/nytreact");
// }

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});