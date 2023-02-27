
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  Fname: { type: String, require: true },
  Lname: { type: String, require: true },
  phone: { type: Number, require: true },
  country: { type: String, require: true },
  DOB: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  address: Array,
  cart: Array,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
