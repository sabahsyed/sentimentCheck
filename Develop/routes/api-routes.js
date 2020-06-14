const db = require("../models");
module.exports = function(app) {

  app.get('/', function (req, res) {
    console.log("/get");
  });
  app.get("/api/messages", (req, res) => {
    console.log("/get/api/messages")
    res.render("index", hbs);
  });

  app.post("/api/messages", (req,res) => {
    console.log("Inside api-routes /api/messages");
    console.log(req.body);
      var hbs = db.Message.create({
        username : req.body.name,
        message: req.body.message
      }).then(() => {
        res.render("index", hbs); // USE HANDLEBARS HERE
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/api/listMessages",(req,res) =>{
    console.log();
    var result = db.Message.findAll()
    res.render("index", {Message : result}) //USE HANDLEBARS HERE
  });
};
