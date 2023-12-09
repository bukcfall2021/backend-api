const { Sequelize, DataTypes } = require("sequelize");

// Promo model
const Promo = {
    promoID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    expiryDate: DataTypes.DATE,
    discountPercentage: DataTypes.FLOAT,
    code: DataTypes.STRING
};

module.exports = Promo;