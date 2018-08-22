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
  comments: [{
    type: String
  }],
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

const post = mongoose.model('Post', Post);
module.exports = post;