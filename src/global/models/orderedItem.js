const { DataTypes } = require("sequelize");

// OrderedItem model
const OrderedItem = {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    subtotal: DataTypes.FLOAT,
    
};

module.exports = OrderedItem;