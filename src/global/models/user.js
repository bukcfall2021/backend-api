const { Sequelize } = require("sequelize");

// User model
const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false
    },
    addressID: {
      type: Sequelize.STRING,
      allowNull: false
    },
    walletID: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

module.exports = User;