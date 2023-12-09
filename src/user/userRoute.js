const router = require("express").Router();

router.use("/auth", require("./routes/authRouter"));

module.exports = router;
