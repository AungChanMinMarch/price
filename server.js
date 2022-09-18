const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const app =express();

app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const routes = require('./routes');
app.use("/api",routes);
app.use(express.static("dist"));

const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const uri = process.env.DB_URI;
mongoose.connect(uri).then(()=>{
    app.listen(PORT, ()=>{
    	console.log('server is running on port:', PORT);
    })
});