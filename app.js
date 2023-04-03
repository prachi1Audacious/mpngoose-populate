const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const router = require('../mongodbcrud/router/router')
const app = express();


//Middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(router);

mongoose.connect("mongodb://localhost:27017/Mongodbcrud",{useNewUrlParser:true})
        .then(()=>console.log("connecting successfully"))
        .catch((err)=>console.log(err));



//server
app.listen(7777,()=> console.log('server is running'))
