// Requiring path to so we can use relative routes to our HTML files
const db = require("../models");
const path = require("path");
require("dotenv").config();


// Requiring our custom middleware for checking if a user is logged in
//const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    console.log("STRING MSG GETTING DATA FROM DB");
    db.Message.findAll().then(result => {
      var hbsObject = {
        messages: result
      };
      console.log(JSON.stringify(hbsObject,null,2));
      //console.log(Object.prototype.toString.call(hbsObject));
      res.render("index", hbsObject);
      //console.log({messages : JSON.stringify(result)});
    //res.render("index", {messages : result}) //USE HANDLEBARS HERE
    })
    
  });


  // app.get("/messages", (req, res) => {
  //   res.render("index");
  // });

  // app.post("/messages", (req, res) => {
  //   res.render("index");
  // });
}
app.get("/testsentiment", async (req, res) => {
  // const result = await getSentiment("I like puppies and kittens. They are so warm and fuzzy. It's fun to watch them play. I am proud to own pets and care for them.");
  const result = await getSentiment("I hate everybody. The world is just awful and full of awful people. I feel sick all of the time and wish that I felt better.");
  res.send(JSON.stringify(result, null, 2));
});

​
async function getSentiment(text) {
// Imports the Google Cloud client library
const language = require("@google-cloud/language");
​
// Instantiates a client
const client = new language.LanguageServiceClient();
​
const text = "Hello World";

const document = {
  content: text,
  type: "PLAIN_TEXT"
};
​
// Detects the sentiment of the text
const [result] = await client.analyzeSentiment({ document: document });
const sentiment = result.documentSentiment;
​
console.log(`Text: ${text}`);
console.log(`Sentiment score: ${sentiment.score}`);
console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
return sentiment;
}
  