const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Message = sequelize.define("Message", {
    title: { type: DataTypes.STRING },
    message: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE },
    senderEmail: { type: DataTypes.STRING },
});

User.hasMany(Message, { as: "sentMessages", foreignKey: "senderId" });
Message.belongsTo(User, { as: "sender", foreignKey: "senderId" });

module.exports = Message;
