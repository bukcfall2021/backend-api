const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router.post('/create', categoryController.create);
// router.get('/get', categoryController.get);
router.put('/update', categoryController.update);
router.delete('/delete', categoryController.delete);

module.exports = router