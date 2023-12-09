const { Sequelize, DataTypes } = require("sequelize");

// OrderedItemOrder model
const OrderedItemOrder = {
    orderedItemID: DataTypes.INTEGER,
    orderID: DataTypes.INTEGER
};

module.exports = OrderedItemOrder;