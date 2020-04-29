const express = require('express');                         //Express server
const app = express();
const port = 8000;
const db = require('./config/mongoose');                    //this file is require for setup mongoose in server
const MongoStore = require('connect-mongo');


app.use(express.urlencoded());

app.use('/', require('./routes'));                          //routes folder

//port open for listening 
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});