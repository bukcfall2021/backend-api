const router = require("express").Router();

router.use('/auth', require('./routes/authRoute'));

module.exports = router;