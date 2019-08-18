const mongoose = require('../setting')
const Schema = mongoose.Schema

let fundSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    describe: {
        type: String,
        required: true
    },
    incode: {
        type: String,
        required: true
    },
    expend: {
        type: String
    },
    cash: {
        type: String,
        required: true
    },
    remark: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Funds", fundSchema)