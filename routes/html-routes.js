const path = require("path");

module.exports = function(app) {
  app.get("/index", (req, res) => {
    if (req.user) {
      res.redirect("/index");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
