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
        connection.query('SELECT * FROM darts',(err,result) => {
            if (err) {
                console.error('Error retrieving darts');
                return res.status(500).json({error : 'Error retrieving darts'});
            }
            if (result.length === 0) {
                return res.status(404).json({error : 'No darts found'});
            }
            
            res.json(result);
        });
    });

    
app.get ('/:id',  (req, res) => {
    const paymentId = req.params.id;
    connection.query('SELECT * FROM payments WHERE id = ?',[paymentId],(err,result) => {
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
    const { Dart_ID, Player_ID, Dart_Material, Dart_Length, Dart_Weight, Dart_Level } = req.body;
    const query = 'INSERT INTO darts (Dart_ID, Player_ID, Dart_Material, Dart_Length, Dart_Weight, Dart_Level ) VALUES (?,?,?,?,?,?) ';
    connection.query(query, [Dart_ID, Player_ID, Dart_Material, Dart_Length, Dart_Weight, Dart_Level ], (err,result) => {
        if (err) {
      console.error ('Error inserting dart data into database');
      return res.status (500).json({error : 'Error inserting dart data into database'});
        }
      res.json({success : true, message : 'dart data successfully inserted'});
    });
});

process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;