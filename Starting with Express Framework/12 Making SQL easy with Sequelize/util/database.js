const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  port: 3308, // Specify the port as an option
});

module.exports = sequelize;
