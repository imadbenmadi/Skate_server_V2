const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ServiceCategory = sequelize.define("ServiceCategory", {
    category: { type: DataTypes.STRING },
});

module.exports = ServiceCategory;
