const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const firstnameRouter = require("./routes/firstnameRoutes");
const surnameRouter = require("./routes/surnameRoutes");
const traitRouter = require("./routes/traitRoutes");
const flawRouter = require("./routes/flawRoutes");
const bodyParser = require("body-parser");
require("dotenv").config();
const password = process.env.NODE_ENV_MONGODB;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
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

app.use("/", firstnameRouter, surnameRouter, traitRouter, flawRouter);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
