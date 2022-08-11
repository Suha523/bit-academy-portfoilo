const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProgramSchema = new Schema({
    name: String,
    price: Number,
    deadlineSubmit: Date,
    startDate: Date,
    endDate: Date,
    description: String,
    filters: {
        type: Array,
        trim: true,
        required: true,
        maxlength: 3200
    }
})

const Program = mongoose.model("Program", ProgramSchema)
module.exports = Program