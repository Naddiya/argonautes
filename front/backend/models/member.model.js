const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memberSchema = new Schema({
  username: { type: String, required: true },
});

const Exercise = mongoose.model('Member', memberSchema);

module.exports = Exercise;