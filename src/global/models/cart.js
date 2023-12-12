const { DataTypes } = require("sequelize");

// Cart model
const Cart = {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    itemId: {
        type: DataTypes.UUID,
        allowNull: false,
        refernces: {
            model: 'items',
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
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
};

module.exports = Cart;