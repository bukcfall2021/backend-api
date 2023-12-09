const { Sequelize, DataTypes } = require("sequelize");

// User model
const User = {
    userID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    walletID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.STRING,
    dob: DataTypes.DATE
};

module.exports = User;