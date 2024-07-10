const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Blog = sequelize.define("Blog", {
    title: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Blog;
