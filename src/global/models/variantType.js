const { Sequelize, DataTypes } = require("sequelize");

// VariantType model
const VariantType = {
    variantTypeID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    variantTypeName: DataTypes.STRING,
    description: DataTypes.STRING
};

module.exports = VariantType;