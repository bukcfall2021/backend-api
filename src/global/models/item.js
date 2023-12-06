const { Sequelize } = require("sequelize");

// item model
const Item = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    itemName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    categoryID: {
      type: Sequelize.INTEGER,
      references: {
        model: Category,
        key: 'id',
      },
    },
  };

module.exports = Item;