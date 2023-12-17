const router = require("express").Router();
const infoController = require('../controllers/infoController');

router.put('/edit', infoController.edit);
router.put('/edit-password', infoController.editPassword);
router.post('/new-address', infoController.addAddress);
router.delete('/delete-address', infoController.deleteAddress);

module.exports = router;