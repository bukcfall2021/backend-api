const { Sequelize, DataTypes } = require("sequelize");

//Variant model
const Variant = {
    variantID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    variantTypeID: DataTypes.INTEGER,
    variantName: DataTypes.STRING,
    extraCharge: DataTypes.FLOAT,
    isDefault: DataTypes.BOOLEAN
};

module.exports = Variant;