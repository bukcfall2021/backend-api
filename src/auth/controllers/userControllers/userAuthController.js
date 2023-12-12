const createController = require("../../../global/utils/createController");

// /api/auth/user/login
module.exports.login = createController(async (req, res) => {

    const User = req.app.locals.db.User

});