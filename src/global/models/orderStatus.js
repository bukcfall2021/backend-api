const { Sequelize, DataTypes } = require("sequelize");

// OrderStatus model
const OrderStatus = {
    statusID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    statusName: DataTypes.STRING
};

module.exports = OrderStatus;