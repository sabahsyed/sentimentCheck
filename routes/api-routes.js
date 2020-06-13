const db = require("../models");

module.exports = function(app) {
  app.get("/api/", (req, res) => {
    db.messages.findAll({}).then(dbMessages => {
      res.json(dbMessages);
    });
  });

  app.get("/api/", (req, res) => {
    res.json();
  });

  app.post("/api/messages", (req, res) => {
    console.log("Inside api-routes /api/messages");
    console.log(req.body);
    db.Message.create("index", {
      username: req.body.username,
      message: req.body.message,
      sentiment: req.body.sentiment,
      likes: req.body.likes,
      dislikes: req.body.dislikes
    })
      .then(() => {
        res.render();
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/api/listMessages", (req, res) => {
    console.log();
    result = db.Message.findAll();
    res.render();
  });
};
