const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Course = require("./Course");

const RequestCourse = sequelize.define("RequestCourse", {
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

User.hasMany(RequestCourse);
RequestCourse.belongsTo(User);

Course.hasMany(RequestCourse);
RequestCourse.belongsTo(Course);

module.exports = RequestCourse;
