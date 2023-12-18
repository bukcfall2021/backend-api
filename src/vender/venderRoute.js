const router = require("express").Router();

router.use('/category', require('./routes/categoryRoute'));
router.use('/item', require('./routes/itemRoute'));

module.exports = router;