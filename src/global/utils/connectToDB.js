const appConstants = require("../constants/appConstants");
const { Sequelize } = require("sequelize");
const syncModels = require("./syncModels");

const sequelize = new Sequelize(appConstants.DATABASE_URL);

const connectToDB = async (app) => {
  let ok = false;
  try {
    if (!appConstants.DATABASE_URL) {
      console.log("NO DATABASE_URL in env");
      return;
    }
    console.log("Connecting to db...");
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log("syncing models...");
    await syncModels(sequelize, app);
    console.log("synced models");
    ok = true;
  } catch (e) {
    console.log("Error connecting to db : ", e);
    ok = false;
  }

  return ok;
};

module.exports = { connectToDB, sequelize };
