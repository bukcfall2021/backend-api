const { Sequelize } = require("sequelize");

// category model
const Category = sequelize.define('Category', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

module.exports = Category;