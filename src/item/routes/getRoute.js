const router = require('express').Router();
const itemController = require('../controllers/itemController');

router.get('/:id', itemController.getById);

module.exports = router;