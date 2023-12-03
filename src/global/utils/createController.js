const express = require("express");
const { Model } = require("sequelize");

const createController = (
  callback = (
    req = {
      ...express.request,
      app: {
        ...express.request.app,
        locals: {
          db: {
            User: Model,
          },
        },
      },
    },
    res = express.response,
    next = () => {}
  ) => {}
) => {
  return callback;
};

module.exports = createController;
