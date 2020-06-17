require("dotenv").config();
module.exports = {
    "development": {
        "username": process.env.MYSQL_USER,
        "password": process.env.MYSQL_PASSWORD,
        "database": process.env.MYSQL_DB,
        "host": process.env.MYSQL_HOST,
        "dialect": "mysql"
      },
      "test": {
        "username": "root",
        "password": "Thunder0629!",
        "database": "Message",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
      }
};