// Dependencies
// =============================================================
// Require express & body parser
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Setup Express app//
var app = express();
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route to assets
app.use(express.static(__dirname + '/app/css'));

//  Require route files
require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

// Start the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log(__dirname)
  });
  