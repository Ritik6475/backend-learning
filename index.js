import { name } from "ejs";
import express from "express";
const app = express();
import path from "path";
import mongoose from "mongoose";
const port = process.env.port || 3000;
import dotenv from 'dotenv';
dotenv.config();

app.get('/',(req,res) =>{
n
    res.send("hello world");
});

app.get('/name',(req,res) =>{

res.send('<h1>mera nam arjun </h1>');


});

app.listen(process.env.PORT, () =>{
console.log("server is running on port ");

});
