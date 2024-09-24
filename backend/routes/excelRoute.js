import express from "express";
import multer from "multer";
import path from 'path';
import bodyParser from "body-parser";

const user = express()
user.use(bodyParser.urlencoded({extendedL:true}))
user.use(express.static(path.resolve(__dirname,"public")));

multer.diskStorage({req.fi})