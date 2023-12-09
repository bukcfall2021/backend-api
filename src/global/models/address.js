const { DataTypes } = require("sequelize");

// Address model
const Address = {
    
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    landmark: DataTypes.STRING
};

module.exports = Address;