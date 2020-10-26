const mongoose = require("mongoose");

const flawsSchema = new mongoose.Schema({
  flaw: {
    type: String,
    required: true,
  },
});

const Flaw = mongoose.model("Flaws", flawsSchema);
module.exports = Flaw;
