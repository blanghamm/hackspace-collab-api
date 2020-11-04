const express = require("express");
const traitModal = require("../models/trait");
const app = express();

app.get("/traits", async (req, res) => {
  const trait = await traitModal.find({});
  try {
    res.send(trait);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/traits", async (req, res) => {
  const trait = new traitModal(req.body);
  try {
    await trait.save();
    res.send(trait);
  } catch (err) {
    req.status(500).send(err);
  }
});

app.put("/traits", async (req, res) => {
  const trait = new traitModal(req.body);
  try {
    await trait.save();
    res.send(trait);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/traits/:id", async (req, res) => {
  const trait = await traitModal.findByIdAndDelete(req.params.id);
  try {
    if (!trait) res.status(404).send("No item found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
