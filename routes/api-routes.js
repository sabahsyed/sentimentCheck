const db = require("../models");

module.exports = function(app) {
  app.post("/api/index", (req, res) => {
    res.json({
      username: req.message.username,
      messages: req.message.messages,
      id: req.user.id
    });
  });

  app.post("/api/index", (req, res) => {
    db.Message.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/index");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // app.get("/api/user_data", (req, res) => {
  //   if (!req.message) {
  //     res.json({});
  //   } else {
  //     res.json({
  //       username: req.message.username,
  //       messages: req.message.messages,
  //       id: req.user.id
  //     });
  //   }
  // });
};
