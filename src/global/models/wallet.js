const { Sequelize, DataTypes } = require("sequelize");

// Wallet model
const Wallet = {
    
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },

};

module.exports = Wallet;