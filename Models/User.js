const { DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Assuming you have a configured sequelize instance

const User = sequelize.define("User", {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    telephone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER },
    gender: { type: DataTypes.ENUM("male", "female") },
    profilePic: { type: DataTypes.STRING },
    isEmailVerified: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const Notification = sequelize.define("Notification", {
    type: {
        type: DataTypes.ENUM(
            "verify",
            "contact",
            "event",
            "course",
            "service",
            "blog",
            "message",
            "other"
        ),
    },
    title: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    readed: { type: DataTypes.BOOLEAN, defaultValue: false },
});

User.hasMany(Notification, { as: "notifications" });
Notification.belongsTo(User);

module.exports = User;
