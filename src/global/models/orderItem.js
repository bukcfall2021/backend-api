const { Sequelize } = require('sequelize');

// orderItem model
const OrderItem = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    itemID: {
      type: Sequelize.INTEGER,
      references: {
        model: Item,
        key: 'id',
      },
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  };

module.exports = OrderItem;