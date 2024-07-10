const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CourseCategory = sequelize.define("CourseCategory", {
    category: { type: DataTypes.STRING },
});

module.exports = CourseCategory;
