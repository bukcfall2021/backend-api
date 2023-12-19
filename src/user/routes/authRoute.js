const router = require("express").Router();
const userAuthController = require("../controllers/authController");
const multer = require('../../global/middlewares/multerUpload');

router.post("/signup", multer.single('file'),userAuthController.signup);
router.get("/login", userAuthController.login);

module.exports = router;
