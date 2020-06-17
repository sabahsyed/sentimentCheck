const db = require("../models");
module.exports = function(app) {

  app.get('/', function (req, res) {
    console.log("/get");
    res.render("index");
  });
  app.get("/api/messages", (req, res) => {
    console.log("/get/api/messages")
    res.render("index","hello" );
  });

  app.post("/api/messages", (req,res) => {
    console.log("Inside api-routes /api/messages");
    console.log(req.body);
    // TODO : Insert Andrew's code here
    // Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

/**
 * TODO(developer): Uncomment the following line to run this code.
 */
const text = 'Your text to analyze, e.g. Hello, world!';

// Prepares a document, representing the provided text
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the document
const [result] = await client.analyzeSentiment({document});

const sentiment = result.documentSentiment;
console.log('Document sentiment:');
console.log(`  Score: ${sentiment.score}`);
console.log(`  Magnitude: ${sentiment.magnitude}`);

const sentences = result.sentences;
sentences.forEach(sentence => {
  console.log(`Sentence: ${sentence.text.content}`);
  console.log(`  Score: ${sentence.sentiment.score}`);
  console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
});

        db.Message.create({
          username : req.body.name,
          message: req.body.message,

          //sentiment : 0,  //TODO Andrew's code
          //magnitude :0 //TODO Andrew's code
          
      }).then((result) => {
        console.log(result);
        res.json(result.dataValues);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/api/messages",(req,res) =>{
    console.log();
    var result = db.Message.findAll()
    res.render("index", {Message : result}) //USE HANDLEBARS HERE
  });
};
