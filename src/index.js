const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Routes = require("./routes");
const morgan = require("morgan");

require("dotenv").config();

const { MONGO_URL, HTTP_PORT } = process.env;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(Routes);
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Autorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Acess-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(HTTP_PORT, () => {
  console.log(`Server running on localhost:${HTTP_PORT}`);
});
