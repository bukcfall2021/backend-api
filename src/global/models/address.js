const { Sequelize } = require("sequelize");

// Address model
const Address = {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    houseNo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    landmark: {
      type: Sequelize.STRING,
      allowNull: false
    }
  };

module.exports = Address;