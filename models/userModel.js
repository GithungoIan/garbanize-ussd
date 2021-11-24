const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: [true, "please provide your phone number"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "please provide your name"],
  },
  location: {
    type: String,
    required: [true, "please provide your location"],
  },
  role: {
    type: String,
    default: "land Lord",
    enum: ["land Lord", "collector"],
  },
  registered: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
