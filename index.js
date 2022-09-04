const express = require('express');
const connection = require('./connection');
const clientRoute = require('./routes/client');


const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use('/client', clientRoute);

module.exports= app;