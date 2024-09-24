import mongoose from "mongoose";
import express from 'express'
mongoose.connect("mongodb://127.0.0.1:27017/excelData");

const app =express();
app.listen(3000,function(){
    console.log("server is running")
})