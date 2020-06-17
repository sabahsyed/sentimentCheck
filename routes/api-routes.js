const db = require("../models");
require("dotenv").config();
module.exports = function(app) {

  app.get('/', function (req, res) {
    console.log("/get");
    res.render("index");
  });
  app.get("/api/messages", (req, res) => {
    console.log("/get/api/messages")
    res.render("index","hello" );
  });

  app.post("/api/messages", async (req,res) => {
    console.log("Inside api-routes /api/messages");
    console.log(req.body);
    // TODO : Insert Andrew's code here
    try{
      const sentiment = await getSentiment(req.body.message);
      db.Message.create({
        username : req.body.name,
        message: req.body.message,

        score : sentiment.score,  
        magnitude :sentiment.magnitude, 

    }).then((result) => {
      console.log(result);
      res.json(result.dataValues);
    })
    .catch(err => {
      res.status(401).json(err);
    });
    } catch(err) {
      console.log(err)
    }

        
  });

  app.get("/api/messages",(req,res) =>{
    console.log();
    var result = db.Message.findAll()
    res.render("index", {Message : result}) //USE HANDLEBARS HERE
  });
};

async function getSentiment(text) {
  const language = require("@google-cloud/language");

  const client = new language.LanguageServiceClient();

  const document = {
    content: text, 
    type: "PLAIN_TEXT"
  };

  const [result] = await client.analyzeSentiment({ document: document});
  const sentiment = result.documentSentiment;

  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  return sentiment;
}
