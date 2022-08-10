const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const contactUsSchema = new Schema({
  name: String,
  email: String,
  message: String,
});
// email: {
//   type: String,
//   validate: {
//     validator: function (value) {
//       return value === "correct@example.com";
//     },
//     message: "Invalid email.",
//   },
// },

const message = mongoose.model("message", contactUsSchema);
module.exports = message;
