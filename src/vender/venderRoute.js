const router = require("express").Router();

router.use('/category', require('./routes/categoryRoute'));

module.exports = router;