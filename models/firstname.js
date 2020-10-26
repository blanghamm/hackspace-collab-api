const mongoose = require("mongoose");

const firstnameSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
});

const Firstname = mongoose.model("Firstnames", firstnameSchema);
module.exports = Firstname;
