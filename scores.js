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
        connection.query('SELECT * FROM scores',(err,result) => {
            if (err) {
                console.error('Error retrieving scores');
                return res.status(500).json({error : 'Error retrieving scores'});
            }
            if (result.length === 0) {
                return res.status(404).json({error : 'No scores found'});
            }
            
            res.json(result);
        });
    });

    
    app.get ('/:id',  (req, res) => {
        const Score_ID = req.params.id;
        connection.query('SELECT * FROM scores WHERE Score_ID = ?',[Score_ID],(err,result) => {
            if (err) {
                console.error('Error retrieving score', err);
                return res.status(500).json({error : 'Error retrieving score'});
            }
            if (result.length === 0) {
                return res.status(404).json({error : 'No score found'});
            }
            
            res.json(result[0]);
        });
    });


app.post ('/', (req,res) => {
    const {Score_ID, Player_ID , Game_ID , Score_Value , Time_Recorded} = req.body;
    const query = 'INSERT INTO scores ( Score_ID , Player_ID , Game_ID , Score_Value , Time_Recorded ) VALUES (?,?,?,?,?) ';
    connection.query(query, [Score_ID, Player_ID , Game_ID , Score_Value , Time_Recorded], (err,result) => {
        if (err) {
      console.error ('Error inserting score data into database');
      return res.status (500).json({error : 'Error inserting score data into database'});
        }
      res.json({success : true, message : 'Score data successfully inserted'});
    });
});


app.put('/:id', (req,res) => {
    const { Score_ID , Score_Value } = req.body;
    const updatedScoreData = { Score_ID , Score_Value };
    connection.query ('UPDATE scores SET ? WHERE Score_ID = ?', [updatedScoreData, Score_ID], (err,result) => {
        if (err) {
            console.error ('Error updating score');
            return res.status (500).json({error : 'Error updating score'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Score not found'});
        }
        res.json ({message : 'Score updated successfully'});
    });
});

app.delete ('/:id', (req,res) => {
    const Score_ID = req.params.id;
    const query = 'DELETE FROM scores WHERE Score_ID = ?';
    connection.query (query, [Score_ID], (err,result) => {
        if (err) {
            console.log ('Error deleting score');
            return res.status(500).json({error : 'Error deleting score'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Score not found'});
        }
        res.json({message : 'Score deleted successfully'});
    });
});

// Invoke-RestMethod -Uri "http://localhost:3000/scores" -Method POST -ContentType "application/json" -Body '{"Score_ID":"SCR05"}'

process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;