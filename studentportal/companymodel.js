const mongoose = require('mongoose')

const comps = new mongoose.Schema({
    compname :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    eligibility :{
        type : String,
        required : true
    },
    salary :{
        type : String,
        required : true
    },
    lastdate :{
        type : String,
        required : true,
    },
    rounds :{
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('companies',comps)




