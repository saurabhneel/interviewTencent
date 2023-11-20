const mongoose = require("mongoose");

async function connect() {
  try {
    let connect = await mongoose.connect("mongodb://localhost:27017/interview");
    if (connect) {
      console.log("Database Connected");
    }
  } catch (error) {
    console.log("Database Connection Failed");
  }
}

connect();
