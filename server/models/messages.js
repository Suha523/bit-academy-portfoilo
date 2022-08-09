const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
const contactUsSchema = new Schema({
  name: String,
  email: {
    type: String,
    validate: {
      validator: function (value) {
        return value === "correct@example.com";
      },
      message: "Invalid email.",
    },
  },
  message: String,
});

const message = mongoose.model("message", contactUsSchema);
module.exports = message;
