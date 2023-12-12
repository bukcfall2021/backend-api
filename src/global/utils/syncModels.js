const {createAssociations} = require('./associations');
const AddressModel = require('../models/address');
const AvailedPromoModel = require('../models/availedPromo');
const CartModel = require('../models/cart');
const ItemModel = require('../models/item');
const OrderModel = require('../models/order');
const OrderedItemModel = require('../models/orderedItem');
const OrderStatusModel = require('../models/orderStatus');
const PromoModel = require('../models/promo');
const ReviewModel = require('../models/review');
const RiderModel = require('../models/rider');
const UserModel = require('../models/user');
const VariantModel = require('../models/variant');
const WalletModel = require('../models/wallet');

const syncModels = async (sequelize, app) => {

  const queryInterface = sequelize.getQueryInterface();

  //Use req.app.locals.db.ModelName to access a model for querying 
  app.locals.db = {};
  app.locals.db.User = sequelize.define('user', UserModel);
  app.locals.db.Address = sequelize.define('address', AddressModel, {timestamps: false});
  app.locals.db.Review = sequelize.define('review', ReviewModel);
  app.locals.db.Wallet = sequelize.define('wallet', WalletModel, {createdAt: false});
  app.locals.db.Promo = sequelize.define('promo', PromoModel);
  app.locals.db.AvailedPromo = sequelize.define('availed_promo', AvailedPromoModel);
  app.locals.db.Cart = sequelize.define('cart', CartModel, {timestamps: false});
  app.locals.db.Item = sequelize.define('item', ItemModel);
  app.locals.db.Variant = sequelize.define('variant', VariantModel, {timestamps: false});
  app.locals.db.OrderedItem = sequelize.define('ordered_item', OrderedItemModel, {timestamps: false});
  app.locals.db.Order = sequelize.define('order', OrderModel);
  app.locals.db.Rider = sequelize.define('rider', RiderModel);
  app.locals.db.OrderStatus = sequelize.define('order_status', OrderStatusModel, {timestamps: false});

  // Aggregating tables
  await createAssociations(app.locals.db);

  //If force: true, then all tables will be dropped, and data lost
  await sequelize.sync({ force: false });
};

module.exports = syncModels;