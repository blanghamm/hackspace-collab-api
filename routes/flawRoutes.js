const express = require("express");
const flawModal = require("../models/flaws");
const app = express();

app.get("/flaws", async (req, res) => {
  const flaw = await flawModal.find({});
  try {
    res.send(flaw);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/flaws", async (req, res) => {
  const flaw = new flawModal(req.body);
  try {
    await flaw.save();
    res.send(flaw);
  } catch (err) {
    req.status(500).send(err);
  }
});

module.exports = app;
