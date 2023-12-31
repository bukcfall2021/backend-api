const router = require('express').Router();
const multer = require('../../global/middlewares/multerUpload');
const imageController = require('../controllers/imageController');

router.post('/post/:id', multer.single('file'), imageController.post);

module.exports = router;