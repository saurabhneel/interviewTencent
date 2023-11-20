const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    versionKey: false,
  }
);

otpSchema.index({ userId: 1 });
const otp = mongoose.model("OTP", otpSchema);

module.exports = otp;
