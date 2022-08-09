const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProgramSchema = new Schema({
    name: String,
    img: String,
    price: Number,
    isOpen: Boolean,
    description: String
})

const Program = mongoose.model("Program", ProgramSchema)
module.exports = Program