const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
    host: "localhost",
    dialect: "mysql",
    logging: false, // Set to true to see raw SQL queries
});

module.exports = sequelize;
