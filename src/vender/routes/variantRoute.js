const router = require("express").Router();
const variantController = require('../controllers/variantController');
const multer = require('../../global/middlewares/multerUpload');

router.get('/get', variantController.get);
router.post('/create', multer.single('image'), variantController.create);
router.delete('/delete', variantController.delete);
router.put('/update', variantController.update);

module.exports = router;