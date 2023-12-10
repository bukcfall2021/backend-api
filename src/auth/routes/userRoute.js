const router = require("express").Router();
const userAuthController = require("../controllers/userControllers/userAuthController");

router.get("/login", userAuthController.login);

module.exports = router;
