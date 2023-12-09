const { Sequelize, DataTypes } = require("sequelize");

// OrderedItem model
const OrderedItem = {
    orderedItemID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.FLOAT
};

module.exports = OrderedItem;