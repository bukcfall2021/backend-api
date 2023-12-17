const router = require('express').Router();
const riderController = require('../controllers/authController');

router.post('/signup', riderController.signup);
router.get('/login', riderController.login);

module.exports = router;