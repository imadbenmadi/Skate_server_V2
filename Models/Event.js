const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Event = sequelize.define("Event", {
    title: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    image: { type: DataTypes.STRING },
});

module.exports = Event;
