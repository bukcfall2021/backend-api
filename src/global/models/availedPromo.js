const { Sequelize, DataTypes } = require("sequelize");

// AvailedPromo model
const AvailedPromo = {
    promoID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
};

module.exports = AvailedPromo;

