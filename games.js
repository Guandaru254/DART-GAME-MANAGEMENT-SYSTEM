// Import express.js module 
const express = require('express');

// Create a router instance
const router = express.Router();

const {pool} = require('./dartdbconnect')

const { getConnection , db } = require('./dartdbconnect')



// Define endpoints
// Create Route : GET ./games
router.get ('/', async (req,res) => {
    try {
        const pool = db;
          //Acquire a connection from the pool
          const connection = await getConnection();
          // Execute the SQL query to retrieve all the games
          const games = await connection.query ('SELECT * FROM dartgame_db.games');
          // Release the connection back to the pool
          connection.release ();
          // Check if any games were found
            if (games.length === 0) {
              return res.status(404).json({error : 'No games found'});
            }
          // Send the retrieved games as the response
          res.json (games);
    }
    catch (error) {
        console.error ('Error fetching games :', error);
        res.status (500).json({error : 'Error fetching games'});
    }
});

module.exports = router;