const router = require("express").Router();
const variantController = require('../controllers/variantController');
const multer = require('../../global/middlewares/multerUpload');

router.get('/get/:id', variantController.get);
router.post('/create', multer.single('file'), variantController.create);
router.delete('/delete/:id', variantController.delete);
router.put('/update/:id', variantController.update);

module.exports = router;