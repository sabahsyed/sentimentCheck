module.exports = function(app) {
  app.get("/", (req, res) => {
    const hbsObject = {
      messages: req
    };
    console.log(
      "Request --------------------------------------------------------------- Request"
    );
    console.log(req.body);
    console.log(
      "Response --------------------------------------------------------------- Response"
    );
    console.log(res.body);
    console.log("main page");
    res.render("index", hbsObject);
  });

  app.post("/messages", (req, res) => {
    res.render("index", hbsObject);
  });
};
