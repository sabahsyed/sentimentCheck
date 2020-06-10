const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
