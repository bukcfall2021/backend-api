const { Sequelize, DataTypes } = require("sequelize");

// Address model
const Address = {
    addressID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    landmark: DataTypes.STRING
};

module.exports = Address;