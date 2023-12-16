const router = require('express').Router();
const infoController = require('../controllers/infoController');

router.put('/edit', infoController.edit);
router.put('/edit-password')

module.exports = router;