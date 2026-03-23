const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Employee Name is Mandatory"]
    },
     email:{
        type:String,
        required:[true,"Employee email is Mandatory"]
    },
     phone:{
        type:String,
        required:[true,"Employee phone is Mandatory"]
    },
     designation:{
        type:String,
        required:[true,"Employee designation is Mandatory"]
    },
     salary:{
        type:String,
        required:[true,"Employee salary is Mandatory"]
    },
     city:{
        type:String,
       
    },
     state:{
        type:String,
       
    }
})

// const Employee = new mongoose.model("Employee",EmployeeSchema)

// module.export  = Employee

module.exports = mongoose.model("Employee", EmployeeSchema)