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
        connection.query('SELECT * FROM staff',(err,result) => {
            if (err) {
                console.error('Error retrieving staff');
                return res.status(500).json({error : 'Error retrieving staff'});
            }
            if (result.length === 0) {
                return res.status(404).json({error : 'No staff found'});
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
   // const { Staff_ID , Board_ID , Game_ID , Staff_Name , Phone_Number , Gender , Age  } = req.body;
    const query = 'INSERT INTO staff (Staff_ID , Board_ID , Game_ID , Staff_Name , Phone_Number , Gender , Age) VALUES (?,?,?,?,?,?,?) ';
    connection.query(query, [Staff_ID , Board_ID , Game_ID , Staff_Name , Phone_Number , Gender , Age], (err,result) => {
        if (err) {
      console.error ('Error inserting staff data into database');
      return res.status (500).json({error : 'Error inserting staff data into database'});
        }
      res.json({success : true, message : 'Staff data successfully inserted'});
    });
});


process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;