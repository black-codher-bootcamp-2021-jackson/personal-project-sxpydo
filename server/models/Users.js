const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  first_name: String,
  last_name: String,
  location: String,
  password: String,
  email: String,
  mobile: String,
  options: [String, String],
});

mongoose.model("users", usersSchema);