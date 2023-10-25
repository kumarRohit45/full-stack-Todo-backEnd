const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then(console.log("db Connected Successfully"))
    .catch((error)=>{
       console.log("db connection failed");
       console.error(error);
       process.exit(1);
       
    })
}