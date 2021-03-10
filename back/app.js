// IMPORT ENV
require('dotenv').config();
const dataConf = process.env.DATACONF;
const Member = require('./models/member');

// IMPORT MODULES npm
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// ALLOW CORS
app.use(cors());

// CONNECT TO DATABASE
mongoose.connect(dataConf,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('Success MongoDb connected'))
    .catch(() => console.log('Failed MongoDb not connected'));


// EXPRESS CONF
app.use(express.urlencoded({
}));
app.use(express.json());


// MIDDLEWARE TO POST NEW STUFF TO DATABASE
app.post('/api/member',(req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(()=> res.status(201).json({ message: 'object recorded in database'}))
        .catch(()=> res.status(400).json({ error: 'cant record object'}));
  });

app.use('/argos', (req, res, next) => {
    const argos = [
        {
            _id: "jklqsdjfkm",
            name: "Eleftheria"
        },
        {
            _id: "jkfdlsqjfkql",
            name: "Gennadios"
        },
        {
            _id: "jklfqdjskflqj",
            name: "Lysimachos"
        }
    ];
    res.status(200).json(argos)
});

  // MIDDLEWARE TO GET A SINGLE STUFF
// app.get('/api/member/:id', (req, res, next) => {
//     Thing.findOne({ _id: req.params.id })
//       .then(thing => res.status(200).json(thing))
//       .catch(error => res.status(404).json({ error }));
//   });

// MIDDLEWARE TO GET STUFF COLLECTION
app.use('/api/stuff', (req, res, next) => {
    Member.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }))
  });


  

module.exports = app;