const createController = require("../../global/utils/createController");

// /api/user/auth/login
module.exports.login = createController(async (req, res) => {
  const User = req.app.locals.db.User;

  try {
    const user = await User.create({
      name: "Mubashir Ali",
    });

    const allUsersFromDB = await User.findAll();

    res.send({
      success: true,
      data: allUsersFromDB,
      error: null,
    });
  } catch (e) {
    res.send({
      success: false,
      data: null,
      error: e.message,
    });
  }
});
