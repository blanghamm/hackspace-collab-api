const mongoose = require("mongoose");

const AgeSchema = new mongoose.Schema({
  age: {
    type: Number,
    validate(value) {
      if (value < 0) throw new Error("Has to be Positive");
    },
  },
});

const Age = mongoose.model("Age", AgeSchema);
module.exports = Age;
