const express = require('express');
const router = express.Router();

// Use User Model
const User = require('../../models/User');

// User GET request
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users));
});

// User POST request
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    color: req.body.color
  });

  newUser.save()
    .then(user => res.json(user))
});

// User DELETE request
router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove()
      .then(() => res.json({success: true})))
    .catch(err => res.state(404).json({success: false}));
});

module.exports = router;