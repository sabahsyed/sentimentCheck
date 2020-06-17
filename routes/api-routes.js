const db = require("../models");

module.exports = function(app) {
  app.get("/", (req, res) => {
    console.log("/get");
    res.render("index");
  });
  app.get("/api/messages", (req, res) => {
    console.log("/get/api/messages");
    res.render("index", "hello");
  });

  app.post("/api/messages", (req, res) => {
    console.log("Inside api-routes /api/messages");
    console.log(req.body);
    // TODO : Insert Andrew's code here
    db.Message.create({
      username: req.body.name,
      message: req.body.message
      //sentiment : 0,  //TODO Andrew's code
      //magnitude :0 //TODO Andrew's code
    })
      .then(result => {
        console.log(result);
        res.json(result.dataValues);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/api/messages", (req, res) => {
    console.log();
    const result = db.Message.findAll();
    res.render("index", { Message: result }); //USE HANDLEBARS HERE
  });
};

// const db = require("../models");

// module.exports = function(app) {
//   app.get("/api/", (req, res) => {
//     db.messages.findAll({}).then(dbMessages => {
//       res.json(dbMessages);
//     });
//   });

//   app.get("/api/", (req, res) => {
//     res.json();
//   });

//   app.post("/api/messages", (req, res) => {
//     console.log("Inside api-routes /api/messages");
//     console.log(req.body);
//     db.Message.create("index", {
//       username: req.body.username,
//       message: req.body.message,
//       sentiment: req.body.sentiment,
//       likes: req.body.likes,
//       dislikes: req.body.dislikes
//     })
//       .then(() => {
//         res.render();
//       })
//       .catch(err => {
//         res.status(401).json(err);
//       });
//   });

//   app.get("/api/listMessages", (req, res) => {
//     console.log();
//     result = db.Message.findAll();
//     res.render();
//   });
// };
