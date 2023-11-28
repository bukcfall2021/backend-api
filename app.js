const express = require("express");
const { connectToDB } = require("./src/global/utils/connectToDB");
const appConstants = require("./src/global/constants/appConstants");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("cors")());

// routes
app.use("/api/user", require("./src/user/userRoute"));
app.use("/api/vender", require("./src/vender/venderRoute"));
app.use("/api/rider", require("./src/rider/riderRoute"));
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
