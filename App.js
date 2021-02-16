const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
var cors = require("cors");
const rout = require("./Routes/Route");

require("dotenv/config");
const app = express();
app.use(cors());
app.use(bodyparser.json());
mongoose.connect(
  process.env.Db_Connection,
  { useNewUrlParser: true },

  () => console.log("Db Connected"),
);

app.use("/User", rout);

app.listen("4000", console.log("Listening on port 4000"));
