const {DataTypes} = require('sequelize');

const ItemVariant = {

    itemId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'items',
            key: 'id'
        }
    },
    variantId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'variants',
            key: 'id'
        }
    },

};

module.exports = ItemVariant