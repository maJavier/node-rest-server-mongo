// Imports
require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

 /* MiddleWare */
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
 /* */

app.use(require('./routes/user'));





// Content DB using mongoose 
mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {

    if( err ) throw err;
    console.log('db working');

});

// Running the local server
app.listen(process.env.PORT, () => {
    console.log('Listening port', process.env.PORT)
});