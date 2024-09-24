import mongoose from "mongoose";

const  dataSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    lname:{
        type:String,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
})
module.exports = mongoose.model("data",dataSchema);