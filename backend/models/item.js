const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  protein: {
    type: String,
    required: true,
  },
  carbohydrates: {
    type: String,
    required: true,
  },
  fats: {
    type: String,
    required: true,
  },
  fibre: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

exports.modules = Item;
