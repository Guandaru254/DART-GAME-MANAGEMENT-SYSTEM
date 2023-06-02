// Import dependencies

const express = require('express');

const mysql = require('mysql');

const app = express();

const dbConfig = {
    host : 'localhost',
    user : 'root',
    password : 'guandaru',
    database : 'dartgame_db',
};

// Create a router instance

app.use(express.json());

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error ('Error creating connection to the database', err);
        return; 
    }
    console.log('Connected to database');
});



app.get ('/',  (req, res) => {
        connection.query('SELECT * FROM designations',(err,result) => {
            if (err) {
                console.error('Error retrieving designations');
                return res.status(500).json({error : 'Error retrieving designations'});
            }
            if (result.length === 0) {
                return res.status(404).json({error : 'No designations found'});
            }
            
            res.json(result);
        });
    });

    
app.get ('/:id',  (req, res) => {
    const Designation_ID = req.params.id;
    connection.query('SELECT * FROM designations WHERE Designation_ID = ?',[Designation_ID],(err,result) => {
        if (err) {
            console.error('Error retrieving designation');
            return res.status(500).json({error : 'Error retrieving designation'});
        }
        if (result.length === 0) {
            return res.status(404).json({error : 'No designation found'});
        }
        
        res.json(result[0]);
    });
});

app.get ('/:id',  (req, res) => {
    const Payment_ID = req.params.id;
    connection.query('SELECT * FROM payments WHERE Payment_ID = ?',[Payment_ID],(err,result) => {
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
    const { Designation_ID , Designation_Role , Hire_Date } = req.body;
    const query = 'INSERT INTO designations ( Designation_ID , Designation_Role , Hire_Date ) VALUES (?,?,?) ';
    connection.query(query, [ Designation_ID , Designation_Role , Hire_Date ], (err,result) => {
        if (err) {
      console.error ('Error inserting designations data into database');
      return res.status (500).json({error : 'Error inserting designations data into database'});
        }
      res.json({success : true, message : 'Designations data successfully inserted'});
    });
});


app.put('/', (req,res) => {
    const { Player_ID, Player_Name, Phone_Number, Age } = req.body;
    const updatedPlayerData = { Player_ID , Player_Name , Phone_Number , Age  };
    connection.query ('UPDATE players SET ? WHERE Player_ID = ?', [updatedPlayerData, Player_ID], (err,result) => {
        if (err) {
            console.error ('Error updating player');
            return res.status (500).json({error : 'Error updating player'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Player not found'});
        }
        res.json ({message : 'Player updated successfully'});
    });
});


app.delete ('/:id', (req,res) => {
    const Player_ID = req.params.id;
    const query = 'DELETE FROM players WHERE Player_ID = ?';
    connection.query (query, [Player_ID], (err,result) => {
        if (err) {
            console.log ('Error deleting player');
            return res.status(500).json({error : 'Error deleting player'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Player not found'});
        }
        res.json({message : 'Player deleted successfully'});
    });
});


process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;