const router = require('express').Router();

router.use('/get', require('./routes/getRoute'));

module.exports = router;