const router = require('express').Router();
const itemController = require('../controllers/itemController');
const multer = require('../../global/middlewares/multerUpload');

router.post('/create', multer.single('image'), itemController.create);
// router.get('/get', itemController.get);
router.put('/update', itemController.update);
router.delete('/delete', itemController.delete);

module.exports = router