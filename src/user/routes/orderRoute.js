const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.post('/create', orderController.create);
router.delete('/reject/:id', orderController.delete);
router.get('/all', orderController.getAll);
router.get('/by-user/:id', orderController.getbyUserId);
router.get('/by-order/:id', orderController.getByOrderId);

module.exports = router;