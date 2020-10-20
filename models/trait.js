const mongoose = require("mongoose");

const traitSchema = new mongoose.Schema({
  trait: {
    type: String,
    required: true,
  },
});

const Trait = mongoose.model("Trait", traitSchema);
module.exports = Trait;
