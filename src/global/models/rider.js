const { Sequelize, DataTypes } = require("sequelize");

// Rider model
const Rider = {
    riderID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN
};

module.exports = Rider;