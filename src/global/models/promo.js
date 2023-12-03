const { Sequelize } = require("sequelize");

// Promo model
const Promo = sequelize.define('Promo', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false
    },
    discountPercentage: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    expiryDate: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });

module.exports = Promo;