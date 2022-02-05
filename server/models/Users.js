const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  firstName: String,
  lastName: String,
  location: String,
  emailAddress: String,
  mobile: String,
  options: [String, String],
});

mongoose.model("users", usersSchema);