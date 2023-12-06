const { Sequelize } = require("sequelize");

// Wallet model
const Wallet = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    balance: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  };

module.exports = Wallet;