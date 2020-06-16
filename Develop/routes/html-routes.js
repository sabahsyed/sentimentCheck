// Requiring path to so we can use relative routes to our HTML files
const db = require("../models");
const path = require("path");



// Requiring our custom middleware for checking if a user is logged in
//const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // db.Message.findAll().then((messages) =>{
    //   res.render('index', {messages: messages})
    // })
    res.redirect("/messages");
  });


  // app.get("/messages", (req, res) => {
  //   res.render("index");
  // });

  app.post("/messages", (req, res) => {
    res.render("index");
  });

  app.get("/messages", (req, res) => {
    console.log("STRING MSG GETTING DATA FROM DB");
    db.Message.findAll().then(result => {
      console.log({messages : JSON.stringify(result)});
    res.render("index", {messages : result}) //USE HANDLEBARS HERE
    })
    
  });

  // burger.all(function(burgerData) {
  //   // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
  //   res.render("index", { burger_data: burgerData });
  // });
}
  

  