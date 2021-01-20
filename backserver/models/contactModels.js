const mongoose = require('mongoose')

const contactTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}) 

module.exports = mongoose.model('giDB', contactTemplate)