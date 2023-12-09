const { Sequelize, DataTypes } = require("sequelize");

//Variant model
const Variant = {
    variantID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    variantTypeID: DataTypes.INTEGER,
    variantName: DataTypes.STRING,
    extraCharge: DataTypes.FLOAT,
    isDefault: DataTypes.BOOLEAN
};

module.exports = Variant;