const { Sequelize, DataTypes } = require("sequelize");

// Wallet model
const Wallet = {
    walletID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    balance: DataTypes.FLOAT,
    dateUpdated: DataTypes.DATE
};

module.exports = Wallet;