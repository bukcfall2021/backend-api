const { DataTypes } = require("sequelize");

//Variant model
const Variant = {

    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    variantName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    itemIMG: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    extraCharge: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    isDefault: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    }
    
};

module.exports = Variant;