const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

// EXPRESS SERVER CONF
const app = express();

// MIDDLEWARES FOR FORMAT AND CORS
app.use(express.json());
app.use(cors());

// CONFIG FOR MONGODB CONNEXION AND PORT CONNEXION
const uri = process.env.MONGO_DATA;
const port = process.env.PORT;


// DATABASE CONNECTION
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established sucessfully")
});

// MIDDLAWARES FOR ROUTES TO MEMBERS
// REQUIRING THE FILES
const membersRouter = require('./routes/members');
// USING FILES
app.use('/members', membersRouter);

// START SERVER
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});


