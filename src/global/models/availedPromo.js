const { Sequelize } = require('sequelize');

// AvailedPromo model
const AvailedPromo = sequelize.define('AvailedPromo', {
    userID: {
      type: Sequelize.STRING,
      allowNull: false
    },
    promoID: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

module.exports = AvailedPromo;