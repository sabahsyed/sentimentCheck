const db = require("../models");
module.exports = function(app) {
  app.get("api/messages", (req, res) => {
    res.json({
      message: req.message
    });
  });
  app.post("api/messages", (req,res) => {
      db.Message.create({
        message: 
      })
  })
};
