const UserModel = require("../models/users");

const syncModels = async (sequelize, app) => {
  app.locals.db = {};
  app.locals.db.User = sequelize.define("user", UserModel);

  await sequelize.sync({ force: true });
};

module.exports = syncModels;
