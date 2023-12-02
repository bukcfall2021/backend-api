const { Sequelize } = require("sequelize");

const UserModel = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
};

module.exports = UserModel;
