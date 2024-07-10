const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Course = sequelize.define("Course", {
    title: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    category: { type: DataTypes.STRING },
});

module.exports = Course;
