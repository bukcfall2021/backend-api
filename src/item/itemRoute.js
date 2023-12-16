const router = require("express").Router();
const imageController = require('./controllers/imageController');

router.get('/:key', imageController.get);
router.use('/category', require('./routes/categoryRoute'));

module.exports = router;