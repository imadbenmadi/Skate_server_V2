const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Service = sequelize.define("Service", {
    title: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
});

module.exports = Service;
