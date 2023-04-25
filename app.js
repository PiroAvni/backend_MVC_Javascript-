const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bearRoutes = require("./routes/bearsRoute");

const app = express();

app.use(logger('dev')); // logging http request
app.use(express.json()); // parse JSON
app.use(cors()); // cors enable options

app.get("/", (req, res, next) => {
  res.send("We are building an API again");
});

app.use("/bears", bearRoutes);

module.exports = app;
