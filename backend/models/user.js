const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

exports.module = User;
