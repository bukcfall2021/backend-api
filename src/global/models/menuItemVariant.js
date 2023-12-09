const { Sequelize, DataTypes } = require("sequelize");

// MenuItemVariant model
const MenuItemVariant = {
    itemID: DataTypes.INTEGER,
    variantID: DataTypes.INTEGER
};

module.exports = MenuItemVariant;