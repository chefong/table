const express = require('express');
const router = express.Router();

// Use Post Model
const Post = require('../../models/Post');

// Post GET request
router.get('/', (req, res) => {
  Post.find()
    .then(Posts => res.json(Posts));
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

// Post DELETE request
router.delete('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(Post => Post.remove()
      .then(() => res.json({success: true})))
    .catch(err => res.state(404).json({success: false}));
});

module.exports = router;