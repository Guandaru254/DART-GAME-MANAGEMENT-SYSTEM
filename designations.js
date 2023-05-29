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

/*pool.query ('SELECT * FROM players', (err, result, fields)  => {
    if (err) {
        return console.log (err);
    }
    return console.log (result);
})*/

// Create a router instance

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

app.post ('')

process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;