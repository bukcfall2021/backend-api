const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router.get('/all', categoryController.get);

module.exports = router;