const userModel = require("../models/user");
const addressModel = require("../models/address");
const availedPromoModel = require("../models/availedPromo");
const cartModel = require("../models/cart");
const menuItemModel = require("../models/menuItem");
const menuitemOrderedItemModel = require("../models/menuitemOrderedItem");
const orderModel = require("../models/order");
const orderedItemModel = require("../models/orderedItem");
const orderedItemOrderModel = require("../models/orderedItemOrder");
const orderStatusModel = require("../models/orderStatus");
const promoModel = require("../models/promo");
const reviewModel = require("../models/review");
const riderModel = require("../models/rider");
const userAddressModel = require("../models/userAddress");
const variantModel = require("../models/variant");
const variantTypeModel = require("../models/variantType");
const walletModel = require("../models/wallet");

const syncModels = async (sequelize, app) => {
  app.locals.db = {};
  app.locals.db.User = sequelize.define("user", UserModel), { timestamps: false };
  app.locals.db.Address = sequelize.define("address", addressModel, { timestamps: false });
  app.locals.db.AvailedPromo = sequelize.define("availedPromo", availedPromoModel, { timestamps: false });
  app.locals.db.Cart = sequelize.define("cart", cartModel, { timestamps: false });
  app.locals.db.MenuItem = sequelize.define("menuItem", menuItemModel, { timestamps: false });
  app.locals.db.MenuitemOrderedItem = sequelize.define("menuitemOrderedItem", menuitemOrderedItemModel, { timestamps: false });
  app.locals.db.Order = sequelize.define("order", orderModel, { updatedAt: false });
  app.locals.db.OrderedItem = sequelize.define("orderedItem", orderedItemModel, { timestamps: false });
  app.locals.db.OrderedItemOrder = sequelize.define("orderedItemOrder", orderedItemOrderModel, { timestamps: false });
  app.locals.db.OrderStatus = sequelize.define("orderStatus", orderStatusModel, { createdAt: false });
  app.locals.db.Promo = sequelize.define("promo", promoModel, { timestamps: false });
  app.locals.db.Review = sequelize.define("review", reviewModel, { updatedAt: false });
  app.locals.db.Rider = sequelize.define("rider", riderModel, { timestamps: false });
  app.locals.db.UserAddress = sequelize.define("userAddress", userAddressModel, { timestamps: false });
  app.locals.db.Variant = sequelize.define("variant", variantModel, { timestamps: false });
  app.locals.db.VariantType = sequelize.define("variantType", variantTypeModel, { timestamps: false });
  app.locals.db.Wallet = sequelize.define("wallet", walletModel, { createdAt: false });
  
  // Aggregating tables
  await createAssociations(app.locals.db);
  await sequelize.sync({ force: true });
};

module.exports = syncModels;