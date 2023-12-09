const { Sequelize, DataTypes } = require("sequelize");

// VariantType model
const VariantType = {
    variantTypeID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    variantTypeName: DataTypes.STRING,
    description: DataTypes.STRING
};

module.exports = VariantType;