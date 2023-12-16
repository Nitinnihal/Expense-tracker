const Sequelize = require("sequelize");

const sequelize = new Sequelize("expanse_tracker", "root", "1234rewQ@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
