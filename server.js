const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
  });
});
