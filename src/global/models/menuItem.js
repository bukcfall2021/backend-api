const { DataTypes } = require("sequelize");

// MenuItem model
const MenuItem = {
    
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    itemIMG: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
};

module.exports = MenuItem;