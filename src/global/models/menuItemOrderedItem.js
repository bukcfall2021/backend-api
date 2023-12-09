const { Sequelize, DataTypes } = require("sequelize");

// MenuItemOrderedItem model
const MenuItemOrderedItem = {
    itemID: DataTypes.INTEGER,
    orderedItemID: DataTypes.INTEGER
};

module.exports = MenuItemOrderedItem;