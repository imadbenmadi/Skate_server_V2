const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");
const Service = require("./Service");

const RequestService = sequelize.define("RequestService", {
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

User.hasMany(RequestService);
RequestService.belongsTo(User);

Service.hasMany(RequestService);
RequestService.belongsTo(Service);

module.exports = RequestService;
