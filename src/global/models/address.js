const { Sequelize, DataTypes } = require("sequelize");

// Address model
const Address = {
    addressID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    landmark: DataTypes.STRING
};

module.exports = Address;