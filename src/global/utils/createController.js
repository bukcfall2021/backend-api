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
            Address: Model,
            Review: Model,
            Wallet: Model,
            Promo: Model,
            AvailedPromo: Model,
            Cart: Model,
            Item: Model,
            Variant: Model,
            OrderedItem: Model,
            Order: Model,
            Rider: Model,
            OrderStatus: Model,
            UserAddress: Model,
            ItemVariant: Model,
            ItemOrderedItem: Model,
            OrderOrderedItem: Model,
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
