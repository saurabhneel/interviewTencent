const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.index({ email: 1 });
const User = mongoose.model("User", userSchema);

module.exports = User;
