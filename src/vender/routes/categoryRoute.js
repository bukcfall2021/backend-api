const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router.post('/create', categoryController.create);

module.exports = router