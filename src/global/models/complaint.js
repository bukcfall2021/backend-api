const { Sequelize } = require("sequelize");

// Complaint model
const Complaint = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    reason: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userID: {
      type: Sequelize.STRING,
      allowNull: false
    }
  };

module.exports = Complaint;