const { DataTypes } = require('sequelize');

const ItemOrderedItem = {

    itemId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'items',
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

module.exports = ItemOrderedItem;