const router = require("express").Router();
const promoController = require('../controllers/promoController');

router.get('/get', promoController.get);
router.post('/create', promoController.create);
router.delete('/delete', promoController.delete);
router.put('/update', promoController.update);

module.exports = router;