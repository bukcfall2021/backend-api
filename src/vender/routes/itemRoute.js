const router = require('express').Router();
const itemController = require('../controllers/itemController');
const multer = require('../../global/middlewares/multerUpload');

router.post('/create', multer.single('image'), itemController.create);
router.get('/get/:id', itemController.get);
router.put('/update/:id', itemController.update);
router.delete('/delete/:id', itemController.delete);

module.exports = router