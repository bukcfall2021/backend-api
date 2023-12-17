const router = require("express").Router();

router.use('/auth', require('./routes/authRoute'));
router.use('/order', require('./routes/orderRoute'));
router.use('/cart', require('./routes/cartRoute'));
router.use('/info', require('./routes/infoRoute'));

module.exports = router;