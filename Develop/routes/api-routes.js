const db = require("../models");
module.exports = function(app) {
  app.get("/api/messages", (req, res) => {
    res.json({
      message: req.message
    });
  });
  app.post("/api/messages", (req,res) => {
    console.log("Inside api-routes /api/messages");
    console.log(req.body);
      db.Message.create({
        username : req.body.name,
        message: req.body.message
      }).then(() => {
        res.json(); // USE HANDLEBARS HERE
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/api/listMessages",(req,res) =>{
    console.log()
    var result = db.Message.findAll()
    return res.json(result); //USE HANDLEBARS HERE
  });
};
