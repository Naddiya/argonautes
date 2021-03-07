require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dataConf = process.env.DATACONF;

mongoose.connect(dataConf,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use((req, res, next) => {
    console.log("Received request")
    next();
});

app.use('api/argo-app', (req, res, next) => {
    const members = [
    {
        _id: 'oeihfzeoi',
        name: 'Eleftheria',
      },
    {
        _id: 'oeihfzeomoihi',
        name: 'Gennadios',
    },
    {
        _id:'dfiqjfqfg',
        name: 'Lysimachos'
    }];
    res.status(200).json(members);
});

app.use((req, res, next) => {
    res.json({
        message:"Success received request"
    });
});



module.exports = app;