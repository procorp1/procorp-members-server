const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/members", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log("db connected".yellow);
      });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDb;
