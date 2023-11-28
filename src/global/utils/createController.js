const express = require("express");

const createController = (
  callback = (
    req = {
      ...express.request,
      app: {
        ...express.request.app,
        locals: {
          db: {},
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
