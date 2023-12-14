const router = require('express').Router();
const itemController = require('../controllers/itemController');

router.post('/create', itemController.create);

module.exports = router