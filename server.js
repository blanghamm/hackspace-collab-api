const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ageRouter = require("./routes/ageRoutes");
const firstnameRouter = require("./routes/firstnameRoutes");
const surnameRouter = require("./routes/surnameRoutes");
const traitRouter = require("./routes/traitRoutes");
const flawRouter = require("./routes/flawRoutes");
require("dotenv").config();
const password = process.env.NODE_ENV_MONGODB;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://CollabAdmin:${password}@cluster0.doues.mongodb.net/collabdb?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  console.log("Connected to Database")
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(
  "/",
  ageRouter,
  firstnameRouter,
  surnameRouter,
  traitRouter,
  flawRouter
);

app.listen(5000, () => {
  console.log("listening on 5000");
});
