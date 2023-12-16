const router = require('express').Router();
const categoryController = require('../controllers/category/categoryController')

router.get('/all', categoryController.get);

module.exports = router;