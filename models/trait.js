const mongoose = require("mongoose");

const traitSchema = new mongoose.Schema({
  trait: {
    type: String,
    required: true,
  },
});

const Trait = mongoose.model("Traits", traitSchema);
module.exports = Trait;
