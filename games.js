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


app.post ('/', (req,res) => {
    const { Game_ID , Player_ID , Game_Type , Game_Status } = req.body;
    const query = 'INSERT INTO games (Game_ID , Player_ID , Game_Type , Game_Status) VALUES (?,?,?,?) ';
    connection.query(query, [Game_ID , Player_ID , Game_Type , Game_Status], (err,result) => {
        if (err) {
      console.error ('Error inserting game data into database');
      return res.status (500).json({error : 'Error inserting game data into database'});
        }
      res.json({success : true, message : 'Game data successfully inserted'});
    });
});


process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;