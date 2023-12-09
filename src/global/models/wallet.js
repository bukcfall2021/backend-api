const { Sequelize, DataTypes } = require("sequelize");

// Wallet model
const Wallet = {
    walletID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: UUIDV4,
    },
    balance: DataTypes.FLOAT,
    dateUpdated: DataTypes.DATE
};

module.exports = Wallet;