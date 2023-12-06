const { Sequelize } = require('sequelize');

// ComplaintType model
const ComplaintType = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    }
  };
  
module.exports = ComplaintType;