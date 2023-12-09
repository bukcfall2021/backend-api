const { DataTypes } = require("sequelize");

// Cart model
const Cart = {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    orderedItemId: {
        type: DataTypes.UUID,
        allowNull: false,
        refernces: {
            model: 'orderedItems',
            key: 'id',
        }
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false, 
        references: {
            model: 'users',
            key: 'id',
        }
    }
};

module.exports = Cart;