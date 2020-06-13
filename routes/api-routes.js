const db = require("../models");

module.exports = function(app) {
  app.get("/api/", (req, res) => {
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
  // };
  //   app.post("/api/index", (req, res) => {
  //     res.json({
  //       username: req.messages.username,
  //       message: req.messages.message,
  //       sentiment: req.messages.sentiment,
  //       likes: req.messages.likes,
  //       dislikes: req.messages.dislikes,
  //       createdAt: req.messages.createdAt,
  //       id: req.messages.id
  //     });
  //   });

  //   app.post("/api/index", (req, res) => {
  //     db.Messages.create({
  //       username: req.messages.username,
  //       message: req.messages.message,
  //       sentiment: req.messages.sentiment,
  //       likes: req.messages.likes,
  //       dislikes: req.messages.dislikes,
  //       createdAt: req.messages.createdAt,
  //       id: req.messages.id
  //     })
  //       .then(() => {
  //         res.redirect(307, "/api/index");
  //       })
  //       .catch(err => {
  //         res.status(401).json(err);
  //       });
  //   });
  // };

  // const db = require("../models");

  // module.exports = function(app) {
  app.get("/api/", (req, res) => {
    res.json("index", { posts: req.message });
  });
  app.post("/api/messages", (req, res) => {
    console.log("Inside api-routes /api/messages");
    console.log(req.body);
    db.Message.create("index", {
      username: req.body.username,
      message: req.body.message
    })
      .then(() => {
        res.render("index", { posts: res }); // USE HANDLEBARS HERE
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/api/listMessages", (req, res) => {
    console.log();
    result = db.Message.findAll();
    res.render("index", { posts: res }); //USE HANDLEBARS HERE
  });
};
