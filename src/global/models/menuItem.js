const { Sequelize, DataTypes } = require("sequelize");

// MenuItem model
const MenuItem = {
    itemID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    itemIMG: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN
};

module.exports = MenuItem;