const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Import mLab URI
const db = require('./config/secrets').mongoURI;

// Set server port
const port = process.env.PORT || 5000;

// Import '/api/posts' route
const posts = require('./routes/api/posts');

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Start server
app.listen(port, () => {
  console.log("Listening on port " + port);
})

// Root path
app.get('/', (req, res) => {
  res.send('Hello World');
})

// Using routes
app.use('/api/posts', posts);