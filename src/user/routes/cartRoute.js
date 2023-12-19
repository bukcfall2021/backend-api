const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.post('/create', cartController.create);
router.put('/update', cartController.update);
router.delete('/delete', cartController.delete);
// router.get('/get', cartController.get);

module.exports = router;