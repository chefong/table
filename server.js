const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
require("dotenv").config();

// Import mLab URI
const db = require('./config/secrets').mongoURI;

// Set server port
const port = process.env.PORT || 5000;

// Import '/api/posts' route
const posts = require('./routes/api/posts');

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  })
}

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT");
  next();
})

// Root path
app.get('/', (req, res) => {
  res.send('Hello World');
})

// Using routes
app.use('/api/posts', posts);

// Start server
app.listen(port, () => {
  console.log("Listening on port " + port);
})