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

app.put("/flaws", async (req, res) => {
  const flaw = new flawModal(req.body);
  try {
    await flaw.save();
    res.send(flaw);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("./flaws/:id", async (req, res) => {
  const flaw = await flawModal.findByIdAndDelete(req.params.id);
  try {
    if (!flaw) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
