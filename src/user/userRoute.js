const router = require("express").Router();

router.use('/auth', require('./routes/authRoute'));
router.use('/order', require('./routes/orderRoute'));

module.exports = router;