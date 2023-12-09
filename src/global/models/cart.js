const { Sequelize, DataTypes } = require("sequelize");

// Cart model
const Cart = {
    cartID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    orderedItemID: DataTypes.INTEGER
};

module.exports = Cart;