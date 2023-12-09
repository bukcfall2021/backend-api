const { DataTypes } = require('sequelize');

const OrderOrderedItem = {

    orderId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'orders',
            key: 'id',
        }
    },
    orderedItemId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'ordered_items',
            key: 'id',
        }
    },

};

module.exports = OrderOrderedItem;