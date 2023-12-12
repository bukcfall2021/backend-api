const { DataTypes } = require("sequelize");

// OrderedItem model
const OrderedItem = {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    orderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'orders',
            key: 'id'
        }
    },
    itemId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'items',
            key: 'id',
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    subtotal: DataTypes.FLOAT,
    
};

module.exports = OrderedItem;