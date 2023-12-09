const { Sequelize, DataTypes } = require("sequelize");

// OrderStatus model
const OrderStatus = {
    statusID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    statusName: DataTypes.STRING
};

module.exports = OrderStatus;