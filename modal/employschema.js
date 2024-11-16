const mongoose=require('mongoose')
const validate=require('validator')

const employschema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validates:[validate.isEmail,'invalid email']
    },
    salary:{
        type:Number,
        required:true,
    }



})

const employs=mongoose.model('employs',employschema)
module.exports=employs