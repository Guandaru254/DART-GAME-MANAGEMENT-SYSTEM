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
    const Staff_ID = req.params.id;
    connection.query('SELECT * FROM staff WHERE Staff_ID = ?',[Staff_ID],(err,result) => {
        if (err) {
            console.error('Error retrieving staff');
            return res.status(500).json({error : 'Error retrieving staff'});
        }
        if (result.length === 0) {
            return res.status(404).json({error : 'No staff found'});
        }
        
        res.json(result[0]);
    });
});

app.post ('/', (req,res) => {
    const { Staff_ID , Board_ID , Game_ID , Staff_Name , Phone_Number , Gender , Age  } = req.body;
    const query = 'INSERT INTO staff (Staff_ID , Board_ID , Game_ID , Staff_Name , Phone_Number , Gender , Age) VALUES (?,?,?,?,?,?,?) ';
    connection.query(query, [Staff_ID , Board_ID , Game_ID , Staff_Name , Phone_Number , Gender , Age], (err,result) => {
        if (err) {
      console.error ('Error inserting staff data into database');
      return res.status (500).json({error : 'Error inserting staff data into database'});
        }
      res.json({success : true, message : 'Staff data successfully inserted'});
    });
});


app.put('/:id', (req,res) => {
    const { Staff_ID , Age } = req.body;
    const updatedStaffData = { Staff_ID , Age  };
    connection.query ('UPDATE staff SET ? WHERE Staff_ID = ?', [updatedStaffData, Staff_ID], (err,result) => {
        if (err) {
            console.error ('Error updating staff');
            return res.status (500).json({error : 'Error updating staff'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Staff not found'});
        }
        res.json ({message : 'Staff updated successfully'});
    });
});


app.delete ('/:id', (req,res) => {
    const Staff_ID = req.params.id;
    const query = 'DELETE FROM staff WHERE Staff_ID = ?';
    connection.query (query, [Staff_ID], (err,result) => {
        if (err) {
            console.log ('Error deleting staff');
            return res.status(500).json({error : 'Error deleting staff'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Staff not found'});
        }
        res.json({message : 'Staff deleted successfully'});
    });
});


process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;