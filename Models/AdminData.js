const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AdminData = sequelize.define("AdminData", {
    adminUserName: { type: DataTypes.STRING },
    adminPwd: { type: DataTypes.STRING },
});

module.exports = AdminData;
