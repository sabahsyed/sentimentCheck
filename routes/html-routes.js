// const path = require("path");

// module.exports = function(app) {
//   app.get("/index", (req, res) => {
//     if (req.messages) {
//       res.redirect("/index");
//     }
//     res.sendFile(path.join(__dirname, "../public/index"));
//   });
// };

const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index"));
  });

  app.get("/messages", (req, res) => {
    res.sendFile(path.join(__dirname, "index"));
  });

  app.post("/messages", (req, res) => {
    res.sendFile(path.join(__dirname, "index"));
  });

  app.get("/listMessages", (req, res) => {
    res.sendFile(path.join(__dirname, "index"));
  });
};
