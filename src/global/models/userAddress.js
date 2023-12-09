const { Sequelize, DataTypes } = require("sequelize");

// UserAddress model
const UserAddress = {
    userID: DataTypes.INTEGER,
    addressID: DataTypes.INTEGER
};

module.exports = UserAddress;