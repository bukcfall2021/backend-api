const { Sequelize, DataTypes } = require("sequelize");

// Cart model
const Cart = {
    cartID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    orderedItemID: DataTypes.INTEGER
};

module.exports = Cart;