const { Sequelize } = require("sequelize");

// Order model
  const Order = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    }};

module.exports = Order;