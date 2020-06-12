const db = require("../models");
module.exports = function(app) {
  app.get("api/messages", (req, res) => {
    res.json({
      message: req.message
    });
  });
  app.post("api/messages", (req,res) => {
      db.Message.create({
        message: req.body.userMessage
      })
      .then(() => {
        res.redirect(307, "/api/messages");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  })

  app.get("/api/messages",(req,res) =>{

  })
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

};
