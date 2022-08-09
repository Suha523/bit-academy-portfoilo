const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProgramSchema = new Schema({
    name: String,
    img: String,
    price: Number,
    isOpen: Boolean,
    description: String
})

const Programm = mongoose.model("Programm", ProgramSchema)
module.exports = Programm