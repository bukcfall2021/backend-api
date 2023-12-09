const { DataTypes } = require("sequelize");

// OrderStatus model
const OrderStatus = {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    statusName: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    
};

module.exports = OrderStatus;