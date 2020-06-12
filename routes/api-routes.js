const db = require("../models");

module.exports = function(app) {
  app.get("/api/index", (req, res) => {
    res.json({
      username: req.message.username,
      messages: req.message.messages,
      id: req.user.id
    });
  });

  app.post("/api/index", (req, res) => {
    res.json({
      username: req.message.username,
      messages: req.message.messages,
      id: req.user.id
    });
  });
};
