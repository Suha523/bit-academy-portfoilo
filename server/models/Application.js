const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ApplicationSchema = new Schema({
    name: String,
    email: String,
    address: String,
    phone: Number,
    university: String,
    gpa: Number,
    program: {type: Schema.Types.ObjectId, ref: 'Program'},
    english_level: String,
    isAccept: Boolean
})





const Application = mongoose.model("Application", ApplicationSchema)
module.exports = Application