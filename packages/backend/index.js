const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from the .env file
const router = require('./routes/TodoRotue'); // Assuming the router is defined in 'TodoRotue.js'
const app = express();
const uri = "mongodb+srv://mcknx:uUr%40%5E5ZeAKyw7%24UI@cluster0.cowhwoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // will turn it off after examination checking

app.use(express.json()); // Middleware to parse JSON data from incoming requests
app.use(cors()); // Enable CORS to allow cross-origin requests

mongoose
  .connect(uri) // Connect to the MongoDB database using the URL from .env file
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const PORT = process.env.PORT || 1997; // Use the specified port from .env file or default to 1997
app.use(router); // Mount the router to handle requests

app.listen(PORT, () => {
  console.log('====================================');
  console.log(`Listening on port: ${PORT}`);
  console.log('====================================');
});
