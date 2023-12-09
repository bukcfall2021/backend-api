const { DataTypes } = require("sequelize");

// Promo model
const Promo = {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    expiryDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    discountPercentage: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING(8),
        allowNull: false,
    },
    
};

module.exports = Promo;