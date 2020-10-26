const express = require("express");
const firstnameModal = require("../models/firstname");
const app = express();

app.get("/firstnames", async (req, res) => {
  const firstname = await firstnameModal.find({});
  try {
    res.send(firstname);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/firstnames", async (req, res) => {
  const firstname = new firstnameModal(req.body);
  try {
    await firstname.save();
    res.send(firstname);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/firstnames", async (req, res) => {
  const firstname = new firstnameModal(req.body);
  try {
    await firstname.save();
    res.send(firstname);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
