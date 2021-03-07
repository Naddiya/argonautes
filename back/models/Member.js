// Import mongoose
const mongoose = require('mongoose');
// get the object Schema
const Schema = mongoose.Schema;

// use schema constructor to create memberSchema
const memberSchema =  new Schema({
    name: { 
      type: String, 
      required: true,
      trim: true
    },
  },
   {
      timestamp: true,
  });
  
  module.exports = mongoose.model('Member', memberSchema);