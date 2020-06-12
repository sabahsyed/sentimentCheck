const db = require("../models");

module.exports = function(app) {
  app.get("/api/index", (req, res) => {
    res.json({
      username: req.messages.username,
      message: req.messages.message,
      sentiment: req.messages.sentiment,
      likes: req.messages.likes,
      dislikes: req.messages.dislikes,
      createdAt: req.messages.createdAt,
      id: req.messages.id
    });
  });

  app.post("/api/index", (req, res) => {
    res.json({
      username: req.messages.username,
      message: req.messages.message,
      sentiment: req.messages.sentiment,
      likes: req.messages.likes,
      dislikes: req.messages.dislikes,
      createdAt: req.messages.createdAt,
      id: req.messages.id
    });
  });
};
