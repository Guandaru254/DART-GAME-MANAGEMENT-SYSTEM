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
    const paymentId = req.params.id;
    connection.query('SELECT * FROM payments WHERE id = ?',[PAYOO4],(err,result) => {
        if (err) {
            console.error('Error retrieving payment');
            return res.status(500).json({error : 'Error retrieving payment'});
        }
        if (result.length === 0) {
            return res.status(404).json({error : 'No payment found'});
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

// Invoke-RestMethod -Uri "http://localhost:3000/scores" -Method POST -ContentType "application/json" -Body '{"Score_ID":"SCR05"}'

process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;