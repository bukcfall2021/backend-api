const { Sequelize } = require("sequelize");

// Review model
const Review = sequelize.define('Review', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

module.exports = Review;