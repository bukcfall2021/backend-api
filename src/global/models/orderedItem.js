const { Sequelize, DataTypes } = require("sequelize");

// OrderedItem model
const OrderedItem = {
    orderedItemID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.FLOAT
};

module.exports = OrderedItem;