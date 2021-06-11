const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  tel: { type: Number, unique: true },
  email: { type: String, default: "email@domain.com" },
});
module.exports = mongoose.model("users", UserSchema);
