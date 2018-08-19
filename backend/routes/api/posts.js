const express = require('express');
const router = express.Router();

// Use Post Model
const Post = require('../../models/Post');

// Post GET request
router.get('/', (req, res) => {
  Post.find()
    .then(posts => res.json(posts));
});

// Post POST request
router.post('/', (req, res) => {
  const newPost = new Post({
    name: req.body.name,
    text: req.body.text,
    color: req.body.color,
    count: req.body.count
  });

  newPost.save()
    .then(Post => res.json(Post))
});

// Post PUT request
router.put('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(post => res.json(post))
});

// Post DELETE request
router.delete('/:id', (req, res) => {
  Post.findByIdAndRemove(req.params.id)
    .then(() => res.json({success: true}))
    .catch(() => res.state(404).json({success: false}));
});

module.exports = router;