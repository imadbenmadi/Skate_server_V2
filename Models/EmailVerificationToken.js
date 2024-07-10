const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const EmailVerificationToken = sequelize.define("EmailVerificationToken", {
    token: { type: DataTypes.STRING },
    expire: {
        type: DataTypes.DATE,
        defaultValue: () => new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

User.hasMany(EmailVerificationToken);
EmailVerificationToken.belongsTo(User);

module.exports = EmailVerificationToken;
