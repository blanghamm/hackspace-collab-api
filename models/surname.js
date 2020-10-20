const mongoose = require("mongoose");

const surnameSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true,
    trim: true,
  },
});

const Surname = mongoose.model("Surname", surnameSchema);
module.exports = Surname;
