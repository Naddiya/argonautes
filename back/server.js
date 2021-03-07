// IMPORT MODULES
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DATACONF;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection; 
mongoose.connection.once('open', () => {
    console.log("success, data available")
})

app.listen(port, () => {
    console.log('server connected')
});