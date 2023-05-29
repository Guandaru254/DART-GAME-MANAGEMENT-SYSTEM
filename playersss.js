// Import express module
const express = require ('express');

// Create a router instance
const router = express.Router();

const db = require('./dartdbconnect');

const getConnection = require('./dartdbconnect');

// Define API endpoints
// Create a route for player REGISTRATION
router.post ('/', async (req,res) =>{
    try {
        const playerData = req.body;
        // Access the pool from the app's locals 
        const pool = req.app.locals.pool;
        //Acquire a connection from the pool
        const connection = await pool.getConnection();
        // Insert the player data into the database
        const result = await pool.query ('INSERT INTO Players SET ?', playerData); 
        // Release the connection back to the pool
        connection.release (); 
        res.status (201).json({message : 'Player Registration Successfully'});
    }
    catch (error) {
        console.error ('Error registering player :', error);
        res.status (500).json({error : 'Error registering player'});
    }
});

// Create a route for RETRIEVING player information
router.get (`/`, async (req,res) => {
    try {
         //Acquire a connection from the pool
        const connection = await getConnection();
        // Execute the SQL query to retrieve all the players
        const players = await connection.query ('SELECT * FROM dartgame_db.players');
        // Release the connection back to the pool
        connection.release ();
        // Check if any players were found
          if (players.length === 0) {
            return res.status(404).json({error : 'No players found'});
          }
        // Send the retrieved players as the response
        res.json (players);
          }
    catch (error) {
        console.error ('Error retrieving players:', error);
        res.status (500).json({error : 'An error occurred while retrieving players'});
    }    
});

// Create a router for UPDATING the players' infromation
router.put ('/:playerId', async (req,res) => {
    try {
        const playerId = req.params.playerId;
        const updateData = req.body;
        // Access the database connection pool through the app's locals
        const pool = db;
         //Acquire a connection from the pool
         const connection = await pool.getConnection();
        // Update the players information in the database
        const query = 'UPDATE players SET ? WHERE playerId =?';
        await pool.query(query, [updateData, playerId]);
        // Send a successful response
           if (result.changedRows > 0) {
            res.json ({message : 'Player Updated Successfully'});
           }
           else {
            res.status (404).json({error : 'Player Not Found'});
           }
    }
    catch (error) {
        console.error ('Error updating player:', err);
        res.status (500).json({error : 'Error updating player'}); 
    } 
});

// Create a route for DELETING a player
router.delete ('/:playerId', async (req,res) => {
    try {
          // Retrieve player ID from the request parameters
          const playerId = req.params.playerId;
          // Access the database connection pool from app.locals
          const pool = db;
          // Acquire a connection from the pool
          const connection = await getConnection(pool);
          // Delete player from the database
          const result = await pool.query('DELETE FROM players WHERE playerId = ?', [playerId]);
                if (result.affectedRows === 0) {
                  return res.status(404).json({error : 'Player not found'});
                } 
                else {
                    res.json({message : 'Player Deleted Successfully'})
                }
    }
    catch (error) {
        console.error ('Error deleting player:', error);
        res.status (500).json({message : 'Error Deleting Player'});
    }
}); 

// Export the routers`
module.exports = router;



