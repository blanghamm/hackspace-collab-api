const express = require("express");
const surnameModal = require("../models/surname");
const app = express();

app.get("/surnames", async (req, res) => {
  const surname = await surnameModal.find({}, { surname: 1, _id: 0 });
  try {
    res.send(surname);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/surnames", async (req, res) => {
  const surname = new surnameModal(req.body);

  try {
    await surname.save();
    res.send(surname);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/surnames", async (req, res) => {
  const surname = new surnameModal(req.body);
  try {
    await surname.save();
    res.send(surname);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
