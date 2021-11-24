const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
    default: "homeOwner",
    enum: ["homeOwner", "collector"],
  },
  registered: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
