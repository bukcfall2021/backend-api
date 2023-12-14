const router = require('express').Router();
const itemController = require('../controllers/itemController');
const multer = require('../../global/middlewares/multerUpload');

router.post('/create', multer.single('image'), itemController.create);

module.exports = router