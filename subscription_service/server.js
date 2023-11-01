const express = require("express");
const app = express();
const routes = require("./routes");

app.use("/", routes);

app.listen(3000, () => {
  console.log("Subscription Server started on port 3000");
});
