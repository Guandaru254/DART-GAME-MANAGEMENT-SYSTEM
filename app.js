// Import express module 
const express = require('express');

const mysql = require('mysql');

//Create an express.js app instance
const app = express();

// Database connection configuration 
const dbconfig = {
    host     :    'localhost',
    user     :    'root',
    password :    ' ',
    database :    'dartgamedb',
};

// Create a database connection pool
const pool = mysql.createPool(dbconfig);

// Set the connection pool as a property in the app object
app.locals.pool = pool;

// Set the port
const port = process.env.PORT || 3000;

// Configure middleware 

// Define routes

// Start the server
app.listen (port, () => {
    console.log (`Server is running on port ${port}`);
});



