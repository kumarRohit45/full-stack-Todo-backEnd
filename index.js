const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const db  = require('./config/database')
const route = require("./Routes/todoRoutes");
const cors = require("cors")



const app = express();
const PORT = process.env.PORT || 8000
app.use(express.json())
app.use(cors());
db.dbConnect();
app.use(route);


app.listen(PORT,()=>{
    console.log("server is running at port no. ",PORT);
})