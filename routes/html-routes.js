module.exports = function(app) {
  app.get("/", (req, res) => {
    const hbsObject = {
      messages: req
    };
    console.log(hbsObject);
    console.log("main page");
    res.render("index", hbsObject);
  });

  app.post("/messages", (req, res) => {
    res.render("index", hbsObject);
  });
};
