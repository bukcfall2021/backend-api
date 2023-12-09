const express = require("express");
const { connectToDB } = require("./src/global/utils/connectToDB");
const appConstants = require("./src/global/constants/appConstants");
const verifyJWT = require("./src/global/middlewares/verifyJWT")
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("cors")());

// routes
// ::auth: handles authentication (login/sign up)
// app.use("/api/auth", require('./src/auth/authRoute'));
// ::item: handles item changes
                                                                                                 
// ::user: handles user actions
app.use("/api/user", require("./src/user/userRoute"));
// ::vendor: handles vendor/admin actions
app.use("/api/vender", require("./src/vender/venderRoute"));
// ::rider: provides order info to rider
app.use("/api/rider", require("./src/rider/riderRoute"));
// ::kitchen: relays kitchen status
app.use("/api/kitchen", require("./src/kitchen/kitchenRoute"));

// test route
app.use("/", (req, res) => {
  res.send("Hello");
});

connectToDB(app).then((ok) => {
  if (ok) {
    app.listen(appConstants.PORT, () => {
      console.log(`Server is running on port ${appConstants.PORT}`);
    });
  }
});
