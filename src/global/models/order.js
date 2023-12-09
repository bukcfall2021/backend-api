const { Sequelize, DataTypes } = require("sequelize");

// Order model
const Order = {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        }
    },
    statusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'order_statuses',
            key: 'id',
        }
    },
    riderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'riders',
            key: 'id'
        }
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    estimatedTime: DataTypes.TIME,
};

module.exports = Order;