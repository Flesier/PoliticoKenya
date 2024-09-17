const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/politicoKenya', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for News
const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  publishedAt: Date
});

const News = mongoose.model('News', newsSchema);

// Endpoint to get all news from the database
app.get('/news', async (req, res) => {
  const news = await News.find();
  res.send(news);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
