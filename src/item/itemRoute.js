const router = require("express").Router();
const imageController = require('./controllers/imageController');

router.get('/:key', imageController.get);

module.exports = router;