const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router.post('/create', categoryController.create);
router.get('/get', categoryController.get);

module.exports = router