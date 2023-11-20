const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const database = require("./connection/mongoDB");
const userRoutes = require("./routes/userRoutes");

app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(userRoutes);

app.listen(3000, () => {
  console.log("Port is up");
});
