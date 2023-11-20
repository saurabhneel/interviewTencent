const otp = require("../models/otp");
const User = require("../models/users");

module.exports.test = (req, res) => {
  console.log("Test");
};

module.exports.register = async (req, res) => {
  try {
    let email = req.body.email;
    let save = await User.create({
      email: email,
    });

    if (save) {
      return res.status(201).json({
        status: 201,
        message: "Registration Successfull",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
    });
  }
};

module.exports.login = async (req, res) => {
  try {
    let email = req.body.email;
    let findUser = await User.findOne({ email: email });

    if (findUser) {
      let user = findUser._id;
      let OTP = parseInt(Math.random() * 10000);

      let saveOTP = await otp.create({
        userId: findUser._id,
        otp: OTP,
      });

      if (saveOTP) {
        return res.status(200).json({
          status: 200,
          userId: user,
          message: "OTP Sent to Your Mail",
        });
      }
    } else {
      return res.status(404).json({
        status: 404,
        message: "User Not Found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
    });
  }
};

module.exports.verifyOTP = async (req, res) => {
  try {
    let _id = req.body._id;
    let OTP = req.body.otp;

    let verify = await otp.countDocuments({
      userId: _id,
      otp: OTP,
    });

    if (verify === 1) {
      return res.status(200).json({
        status: 200,
        message: "Login Successfull",
      });
    } else {
      return res.status(401).json({
        status: 401,
        message: "OTP Mismatch",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something Went Wrong",
    });
  }
};
