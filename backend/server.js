const express = require('express');
const mongoose = require('mongoose');
const app = express();

//! DATABASE CONNECTION
const DBURL = 'mongodb://localhost/crud';
mongoose.connect(DBURL, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('Database connected...');
}).catch(error=>{
    console.log('Connection failed. '+error);
});

//! ROUTES
require('./routes/api')(app);


//! SERVER
const server = app.listen(3000, ()=>{
    console.log('Server connected');
})