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
        connection.query('SELECT * FROM boards',(err,result) => {
            if (err) {
                console.error('Error retrieving boards');
                return res.status(500).json({error : 'Error retrieving boards'});
            }
            if (result.length === 0) {
                return res.status(404).json({error : 'No boards found'});
            }
            
            res.json(result);
        });
    });



    app.post ('/', (req,res) => {
        const {Board_ID, Player_ID, Game_ID , Board_Name, Board_Model, IsAvailable , Board_Location } = req.body;
        const query = 'INSERT INTO boards (Board_ID, Player_ID, Game_ID , Board_Name, Board_Model ,IsAvailable , Board_Location ) VALUES (?,?,?,?,?,?,?) ';
        connection.query(query, [Board_ID, Player_ID, Game_ID , Board_Name, Board_Model ,IsAvailable , Board_Location ], (err,result) => {
            if (err) {
          console.error ('Error inserting boards data into database');
          return res.status (500).json({error : 'Error inserting boards data into database'});
            }
          res.json({success : true, message : 'Boards data successfully inserted'});
        });
    });


process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;