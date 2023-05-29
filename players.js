// Import dependencies

const express = require('express');

const mysql = require('mysql');


const dbConfig = {
    host : 'localhost',
    user : 'root',
    password : 'guandaru',
    database : 'dartgame_db',
};

/*pool.query ('SELECT * FROM players', (err, result, fields)  => {
    if (err) {
        return console.log (err);
    }
    return console.log (result);
})*/

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
        connection.query('SELECT * FROM players',(err,result) => {
            if (err) {
                console.error('Error retrieving players');
                return res.status(500).json({error : 'Error retrieving players'});
            }
            if (result.length === 0) {
                return res.status(404).json({error : 'No players found'});
            }
            
            res.json(result);
        });
    });


app.post ('/', (req,res) => {
    const {Player_ID, Player_Name, Phone_Number, Age} = req.body;
    const query = 'INSERT INTO players (Player_ID, Player_Name, Phone_Number, Age) VALUES (?,?,?,?) ';
    connection.query(query, [Player_ID, Player_Name, Phone_Number, Age], (err,result) => {
        if (err) {
      console.error ('Error inserting player data into database');
      return res.status (500).json({error : 'Error inserting player data into database'});
        }
      res.json({success : true, message : 'Player data successfully inserted'});
    });
});


process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;