const express = require("express");
const app = express();
const router = require("./router");
const cors =require("cors");

const mongoose = require("mongoose");
app.use(express.json());

app.use(cors());

app.use('/',router);
app.listen(3000,(err) => {
    if(!err){
        console.log("Server Run On Port No:3000");
    }
    else{
        console.log("Server Not Connect");
    }
});

var connection = mongoose.connect("mongodb://localhost:27017/meanCrud",( err ) => {
    if(!err){
        console.log("Data Base Connected");
    }
    else
    {
        console.log("Data Base Not Connected");
    }
});