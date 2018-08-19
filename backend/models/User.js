const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String,
    default: '',
    required: true
  },
  email: {
    type: String,
    default: '',
    required: true
  },
  color: {
    type: String,
    default: '',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const user = mongoose.model('User', User);
module.exports = user;