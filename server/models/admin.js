const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const adminSchema = new Schema({
  userName: String,
  password: String,
});
const admin = mongoose.model("admin", adminSchema);
module.exports = admin;
