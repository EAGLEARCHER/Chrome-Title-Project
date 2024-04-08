const { Sequelize } = require("sequelize");
require("dotenv").config();
// Initialize Sequelize with MySQL database connection details
const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = { sequelize };
