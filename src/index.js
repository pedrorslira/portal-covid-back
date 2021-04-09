const express = require("express");
const mongoose = require("mongoose");
const Routes = require('./routes');

require('dotenv').config()

const {MONGO_URL, HTTP_PORT} = process.env;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(Routes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(HTTP_PORT, () => {
  console.log(`Running on localhost:${HTTP_PORT}`);
});
