require('dotenv').config();
const express = require("express");
const app =express();

const cors = require('cors');
console.log(process.env.CLIENT_ORIGIN);
const corsOptions = {
    origin: process.env.CLIENT_ORIGIN,
    credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());

const routes = require('./routes')
app.use(routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
	console.log('server is running on port:', PORT);
})

module.exports = app