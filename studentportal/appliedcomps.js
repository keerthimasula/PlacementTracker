const mongoose = require('mongoose')

const appliedS = new mongoose.Schema({
    compname :{
        type : String,
        required : true
    },
    compId :{
        type : String,
        required : true
    },
    studentname :{
        type : String,
        required : true
    },
    studentId :{
        type : String,
        required : true
    },
    salary:String,
    clgId:String,
    writtentest:String,
    technicalround:String,
    hrround:String
})

module.exports = mongoose.model('Registered Company Data',appliedS)




