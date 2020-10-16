const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const dbUrl = require('./keys').URL;

const authRoutes = require('./routes/auth');

// const dbUrl = process.env.URL;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(authRoutes);

mongoose.connect(dbUrl, {
    useNewUrlParser: true
}).then(() => {
    console.log('Mongodb successfully connected!')
}).catch(err => {
    console.log(err)
})

app.listen(3000)