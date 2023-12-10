const router = require("express").Router();

router.use('/user', require('./routes/userRoute'))

module.exports = router;
