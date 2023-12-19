const router = require("express").Router();

router.use('/auth', require('./routes/authRoute'));
router.use('/info', require('./routes/infoRoute'));

module.exports = router;