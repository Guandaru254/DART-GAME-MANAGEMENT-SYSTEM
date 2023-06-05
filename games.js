// Import dependencies

const express = require('express');

const mysql = require('mysql');


const dbConfig = {
    host : 'localhost',
    user : 'root',
    password : 'guandaru',
    database : 'dartgame_db',
};

// Create a router instance

const app = express();

app.use (express.json());

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error ('Error creating connection to the database', err);
        return; 
    }
    console.log('Connected to database');
});



app.get ('/',  (req, res) => {
        connection.query('SELECT * FROM games',(err,result) => {
            if (err) {
                console.error('Error retrieving games');
                return res.status(500).json({error : 'Error retrieving games'});
            }
            if (result.length === 0) {
                return res.status(404).json({error : 'No games found'});
            }
            
            res.json(result);
        });
    });

    app.get ('/:id',  (req, res) => {
        const Game_ID = req.params.id;
        connection.query('SELECT * FROM games WHERE Game_ID = ?',[Game_ID],(err,result) => {
            if (err) {
                console.error('Error retrieving game', err);
                return res.status(500).json({error : 'Error retrieving game'});
            }
            if (result.length === 0) {
                return res.status(404).json({error : 'No game found'});
            }
            
            res.json(result[0]);
        });
    });


app.post ('/', (req,res) => {
    const { Game_ID , Player_ID , Game_Type , Game_Status } = req.body;
    const query = 'INSERT INTO games (Game_ID , Player_ID , Game_Type , Game_Status) VALUES (?,?,?,?)'; 
    connection.query(query, [ Game_ID , Player_ID , Game_Type , Game_Status ], (err,result) => {
    if (err) {
        console.error ('Error inserting payment data into database');
        return res.status (500).json({error : 'Error inserting payment data into database'});
        }
      res.json({success : true, message : 'Game data successfully inserted'});
    });
});


app.put('/:id', (req,res) => {
    const { Game_ID, Game_Status } = req.body;
    const updatedGameData = {  Game_ID, Game_Status  };
    connection.query ('UPDATE games SET ? WHERE Game_ID = ?', [updatedGameData, Game_ID], (err,result) => {
        if (err) {
            console.error ('Error updating game');
            return res.status (500).json({error : 'Error updating game'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Game not found'});
        }
        res.json ({message : 'Game updated successfully'});
    });
});


app.delete ('/:id', (req,res) => {
    const Game_ID = req.params.id;
    const query = 'DELETE FROM games WHERE Game_ID = ?';
    connection.query (query, [Game_ID], (err,result) => {
        if (err) {
            console.log ('Error deleting game');
            return res.status(500).json({error : 'Error deleting game'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Game not found'});
        }
        res.json({message : 'Game deleted successfully'});
    });
});

process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;