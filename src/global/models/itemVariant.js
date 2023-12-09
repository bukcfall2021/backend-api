const { DataTypes } = require('sequelize');

const ItemVariant = {

    itemId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'items',
            key: 'id',
        }
    },
    variantId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'variants',
            key: 'id',
        }
    },

};

module.exports = ItemVariant;