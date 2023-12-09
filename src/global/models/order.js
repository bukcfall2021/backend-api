const { Sequelize, DataTypes } = require("sequelize");

// Order model
const Order = {
    orderID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    userID: DataTypes.INTEGER,
    statusID: DataTypes.INTEGER,
    riderID: DataTypes.INTEGER,
    orderDate: DataTypes.DATE,
    total: DataTypes.FLOAT,
    estimatedTime: DataTypes.DATE
};

module.exports = Order;