const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true},
});

module.exports = mongoose.model('member', memberSchema);