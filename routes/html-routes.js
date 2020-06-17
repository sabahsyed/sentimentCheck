// Requiring path to so we can use relative routes to our HTML files
const db = require("../models");
const path = require("path");
require("dotenv").config();


// Requiring our custom middleware for checking if a user is logged in
//const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    console.log("STRING MSG GETTING DATA FROM DB");
    db.Message.findAll().then(result => {
      var hbsObject = {
        messages: result
      };
      console.log(JSON.stringify(hbsObject,null,2));
      //console.log(Object.prototype.toString.call(hbsObject));
      res.render("index", hbsObject);
      //console.log({messages : JSON.stringify(result)});
    //res.render("index", {messages : result}) //USE HANDLEBARS HERE
    })
    
  });

}

  