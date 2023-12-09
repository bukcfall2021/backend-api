const { Sequelize, DataTypes } = require("sequelize");

// Promo model
const Promo = {
    promoID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    expiryDate: DataTypes.DATE,
    discountPercentage: DataTypes.FLOAT,
    code: DataTypes.STRING
};

module.exports = Promo;