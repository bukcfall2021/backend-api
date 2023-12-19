const { Sequelize, DataTypes } = require("sequelize");
const thirtyMinutesLater = Sequelize.literal('NOW() + INTERVAL 30 MINUTE');

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
    orderStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'order_statuses',
            key: 'id',
        }
    },
    riderId: {
        type: DataTypes.UUID,
        references: {
            model: 'riders',
            key: 'id'
        }
    },
    promoId: {
        type: DataTypes.UUID,
        references: {
            model: 'promos',
            key: 'id',
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
    estimatedTime: {
        type: DataTypes.TIME,
        allowNull: false,
    },
};

module.exports = Order;