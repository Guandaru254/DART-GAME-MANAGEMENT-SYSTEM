// Import express module 
const express = require('express');

// Import the player.js module
const playersRouter = require('./players.js');

// Create an express.js app instance
const app = express();

// Set the port
const port = process.env.PORT || 3000;

// Configure middleware 
// Enable json parsing allowing us to parse JSON data in the request bodies
app.use (express.json());

// Mount the 'players.js' to the './players' path
app.use ('/players', playersRouter);

// Define routes

// Start the server
app.listen (port, () => {
    console.log (`Server is running on port ${port}`);
});



