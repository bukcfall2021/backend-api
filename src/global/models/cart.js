const { Sequelize } = require("sequelize");

// cart model
const Cart = sequelize.define('Cart', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
  });

module.exports = Cart;