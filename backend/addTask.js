import mongoose from "mongoose";

const schema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    date:{
        type:Date,
        required:true
    },
    
})