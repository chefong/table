const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  name: {
    type: String,
    default: '',
    required: true
  },
  text: {
    type: String,
    default: '',
    required: true
  },
  color: {
    type: String,
    default: '',
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const post = mongoose.model('User', Post);
module.exports = post;