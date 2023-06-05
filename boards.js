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

    app.get ('/:id',  (req, res) => {
        const Board_ID = req.params.id;
        connection.query('SELECT * FROM boards WHERE Board_ID = ?',[Board_ID],(err,result) => {
            if (err) {
                console.error('Error retrieving board', err);
                return res.status(500).json({error : 'Error retrieving board'});
            }
            if (result.length === 0) {
                return res.status(404).json({error : 'No board found'});
            }
            
            res.json(result[0]);
        });
    });

app.post ('/', (req,res) => {
        const {Player_ID, Board_ID,  Game_ID , Board_Name, Board_Model, IsAvailable , Board_Location } = req.body;
        const query = 'INSERT INTO boards (Player_ID, Board_ID,  Game_ID , Board_Name, Board_Model ,IsAvailable , Board_Location ) VALUES (?,?,?,?,?,?,?) ';
        connection.query(query, [ Player_ID, Board_ID,  Game_ID , Board_Name, Board_Model ,IsAvailable , Board_Location ], (err,result) => {
            if (err) {
          console.error ('Error inserting boards data into database');
          return res.status (500).json({error : 'Error inserting boards data into database'});
            }
          res.json({success : true, message : 'Boards data successfully inserted'});
        });
    });

    
app.put('/:id', (req,res) => {
    const { Board_ID , Board_Location } = req.body;
    const updatedBoardData = { Board_ID , Board_Location  };
    connection.query ('UPDATE boards SET ? WHERE Board_ID = ?', [updatedBoardData, Board_ID], (err,result) => {
        if (err) {
            console.error ('Error updating board');
            return res.status (500).json({error : 'Error updating board'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Board not found'});
        }
        res.json ({message : 'Board updated successfully'});
    });
});


app.delete ('/:id', (req,res) => {
    const Board_ID = req.params.id;
    const query = 'DELETE FROM boards WHERE Board_ID = ?';
    connection.query (query, [Board_ID], (err,result) => {
        if (err) {
            console.log ('Error deleting board');
            return res.status(500).json({error : 'Error deleting board'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Board not found'});
        }
        res.json({message : 'Board deleted successfully'});
    });
});


process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;