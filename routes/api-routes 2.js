const db = require("../models");
require("dotenv").config();

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/api/messages", (req, res) => {
    res.render("index", "hello");
  });

  app.post("/api/messages", async (req, res) => {
    try {
      const sentiment = await getSentiment(req.body.message);
      db.Message.create({
        username: req.body.name,
        message: req.body.message,
        sentiment: sentiment.score
      })
        .then(result => {
          console.log(result);
          res.json(result.dataValues);
        })
        .catch(err => {
          res.status(401).json(err);
        });
    } catch (err) {
      // console.log(err);
    }
  });

  app.get("/api/messages", (req, res) => {
    const result = db.Message.findAll();
    res.render("index", { Message: result });
  });
};

async function getSentiment(text) {
  const language = require("@google-cloud/language");

  const client = new language.LanguageServiceClient();

  const document = {
    content: text,
    type: "PLAIN_TEXT"
  };

  const [result] = await client.analyzeSentiment({ document: document });
  const sentiment = result.documentSentiment;
  return sentiment;
}
