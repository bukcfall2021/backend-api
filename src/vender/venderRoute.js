const router = require("express").Router();

router.use('/category', require('./routes/categoryRoute'));
router.use('/item', require('./routes/itemRoute'));
router.use('/variant', require('./routes/variantRoute'));

module.exports = router;