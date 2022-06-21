const DATABASE_URI =
  "mongodb+srv://GaiaMaria8:<password>@cluster0.btpmh.mongodb.net/fliperama";

const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful.");
  } catch (error) {
    console.error(error);
  }
};
module.exports = {
  connect,
};
