const express = require("express");
const appConfig = require("./appConfig");
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

app.listen(appConfig.PORT, () => {
  console.log(`Server is running on port ${appConfig.PORT}`);
});
