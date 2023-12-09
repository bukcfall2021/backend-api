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
  app.locals.db.Order = sequelize.define("order", orderModel, { timestamps: false });
  app.locals.db.OrderedItem = sequelize.define("orderedItem", orderedItemModel, { timestamps: false });
  app.locals.db.OrderedItemOrder = sequelize.define("orderedItemOrder", orderedItemOrderModel, { timestamps: false });
  app.locals.db.OrderStatus = sequelize.define("orderStatus", orderStatusModel, { timestamps: false });
  app.locals.db.Promo = sequelize.define("promo", promoModel, { timestamps: false });
  app.locals.db.Review = sequelize.define("review", reviewModel, { timestamps: false });
  app.locals.db.Rider = sequelize.define("rider", riderModel, { timestamps: false });
  app.locals.db.UserAddress = sequelize.define("userAddress", userAddressModel, { timestamps: false });
  app.locals.db.Variant = sequelize.define("variant", variantModel, { timestamps: false });
  app.locals.db.VariantType = sequelize.define("variantType", variantTypeModel, { timestamps: false });
  app.locals.db.Wallet = sequelize.define("wallet", walletModel, { timestamps: false });

  // Aggregating tables
  await createAssociations(app.locals.db);

  await sequelize.sync({ force: true });
};

const createAssociations = (models) => {
  // User has many AvailedPromos
  models.User.hasMany(models.AvailedPromo, { foreignKey: 'userID' });
  models.AvailedPromo.belongsTo(models.User, { foreignKey: 'userID' });

  // User has many UserAddresses
  models.User.hasMany(models.UserAddress, { foreignKey: 'userID' });
  models.UserAddress.belongsTo(models.User, { foreignKey: 'userID' });

  // User has one Wallet
  models.User.hasOne(models.Wallet, { foreignKey: 'walletID' });
  models.Wallet.belongsTo(models.User, { foreignKey: 'walletID' });

  // User has many Reviews
  models.User.hasMany(models.Review, { foreignKey: 'userID' });
  models.Review.belongsTo(models.User, { foreignKey: 'userID' });

  // User has many Orders
  models.User.hasMany(models.Order, { foreignKey: 'userID' });
  models.Order.belongsTo(models.User, { foreignKey: 'userID' });

  // Address has many UserAddresses
  models.Address.hasMany(models.UserAddress, { foreignKey: 'addressID' });
  models.UserAddress.belongsTo(models.Address, { foreignKey: 'addressID' });

  // Variant has one VariantType
  models.Variant.hasOne(models.VariantType, { foreignKey: 'variantTypeID' });
  models.VariantType.belongsTo(models.Variant, { foreignKey: 'variantTypeID' });

  // MenuItem has many MenuItemVariants
  models.MenuItem.hasMany(models.MenuItemVariant, { foreignKey: 'itemID' });
  models.MenuItemVariant.belongsTo(models.MenuItem, { foreignKey: 'itemID' });

  // Variant has many MenuItemVariants
  models.Variant.hasMany(models.MenuItemVariant, { foreignKey: 'variantID' });
  models.MenuItemVariant.belongsTo(models.Variant, { foreignKey: 'variantID' });

  // Cart has many OrderedItems
  models.Cart.hasMany(models.OrderedItem, { foreignKey: 'orderedItemID' });
  models.OrderedItem.belongsTo(models.Cart, { foreignKey: 'orderedItemID' });

  // MenuItem has many MenuItemOrderedItems
  models.MenuItem.hasMany(models.MenuItemOrderedItem, { foreignKey: 'itemID' });
  models.MenuItemOrderedItem.belongsTo(models.MenuItem, { foreignKey: 'itemID' });

  // OrderedItem has many MenuItemOrderedItems
  models.OrderedItem.hasMany(models.MenuItemOrderedItem, { foreignKey: 'orderedItemID' });
  models.MenuItemOrderedItem.belongsTo(models.OrderedItem, { foreignKey: 'orderedItemID' });

  // Order has many OrderedItemOrders
  models.Order.hasMany(models.OrderedItemOrder, { foreignKey: 'orderID' });
  models.OrderedItemOrder.belongsTo(models.Order, { foreignKey: 'orderID' });

  // OrderedItem has many OrderedItemOrders
  models.OrderedItem.hasMany(models.OrderedItemOrder, { foreignKey: 'orderedItemID' });
  models.OrderedItemOrder.belongsTo(models.OrderedItem, { foreignKey: 'orderedItemID' });

  // Order has one OrderStatus
  models.Order.hasOne(models.OrderStatus, { foreignKey: 'statusID' });
  models.OrderStatus.belongsTo(models.Order, { foreignKey: 'statusID' });

  // Rider has many Orders
  models.Rider.hasMany(models.Order, { foreignKey: 'riderID' });
  models.Order.belongsTo(models.Rider, { foreignKey: 'riderID' });
};

module.exports = syncModels;