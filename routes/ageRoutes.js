const express = require("express");
const ageModel = require("../models/age");
const app = express();

app.get("/age", async (req, res) => {
  const age = await ageModel.find();
  try {
    res.send(age);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/age", async (req, res) => {
  const age = new ageModel(req.body);

  try {
    await age.save();
    res.send(age);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
