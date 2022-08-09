const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompaniesSchema = new Schema({
  name: String,
  img: String,
  description: String,
});

const Company = mongoose.model("Company", CompaniesSchema);
module.exports = Company;
