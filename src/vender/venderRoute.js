const router = require("express").Router();

router.use('/category', require('./routes/categoryRoute'));
router.use('/item', require('./routes/itemRoute'));
router.use('/variant', require('./routes/variantRoute'));
router.use('/promo', require('./routes/promoRoute'));
router.use('/order-status', require('./routes/orderStatusRoute'));

module.exports = router;