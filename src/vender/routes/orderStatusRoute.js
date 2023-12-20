const router = require('express').Router();
const statusController = require('../controllers/orderStatusController');

router.post('/create', statusController.create);

module.exports = router;