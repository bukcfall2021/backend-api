const router = require('express').Router();
const imageController = require('../controllers/imageController');

router.get('/:folder/:key', imageController.get);

module.exports = router;