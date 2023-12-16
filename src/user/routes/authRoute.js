const router = require("express").Router();
const userAuthController = require("../controllers/authController");

router.post("/signup", userAuthController.signup);
router.get("/login", userAuthController.login);

module.exports = router;
