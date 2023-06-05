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
        connection.query('SELECT * FROM payments',(err,result) => {
            if (err) {
                console.error('Error retrieving payments');
                return res.status(500).json({error : 'Error retrieving payments'});
            }
            if (result.length === 0) {
                return res.status(404).json({error : 'No payments found'});
            }
            
            res.json(result);
        });
    });

    
app.get ('/:id',  (req, res) => {
    const Payment_ID = req.params.id;
    connection.query('SELECT * FROM payments WHERE Payment_ID = ?',[Payment_ID],(err,result) => {
        if (err) {
            console.error('Error retrieving payment', err);
            return res.status(500).json({error : 'Error retrieving payment'});
        }
        if (result.length === 0) {
            return res.status(404).json({error : 'No payment found'});
        }
        
        res.json(result[0]);
    });
});

app.post ('/', (req,res) => {
    const {Payment_ID, Player_ID, Game_ID, Payment_Method, Amount } = req.body;
    const query = 'INSERT INTO payments (Payment_ID, Player_ID, Game_ID, Payment_Method, Amount ) VALUES (?,?,?,?,?) ';
    connection.query(query, [Payment_ID, Player_ID, Game_ID, Payment_Method, Amount ], (err,result) => {
        if (err) {
      console.error ('Error inserting payment data into database');
      return res.status (500).json({error : 'Error inserting payment data into database'});
        }
      res.json({success : true, message : 'Payment data successfully inserted'});
    });
});


app.put('/:id', (req,res) => {
    const { Payment_ID , Payment_Method, Amount } = req.body;
    const updatedPaymentData = { Payment_ID , Payment_Method, Amount};
    connection.query ('UPDATE payments SET ? WHERE Payment_ID = ?', [updatedPaymentData, Payment_ID], (err,result) => {
        if (err) {
            console.error ('Error updating payment');
            return res.status (500).json({error : 'Error updating payment'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Payment not found'});
        }
        res.json ({message : 'Payment updated successfully'});
    });
});

app.delete ('/:id', (req,res) => {
    const Payment_ID = req.params.id;
    const query = 'DELETE FROM payments WHERE Payment_ID = ?';
    connection.query (query, [Payment_ID], (err,result) => {
        if (err) {
            console.log ('Error deleting payment');
            return res.status(500).json({error : 'Error deleting payment'});
        }
        if (result.affectedRows === 0) {
            return res.status (404).json({error : 'Payment not found'});
        }
        res.json({message : 'Payment deleted successfully'});
    });
});

// Invoke-RestMethod -Uri "http://localhost:3000/payments" -Method POST -ContentType "application/json" -Body '{"Payment_ID":"PAY005","Game_ID":"GM04", "Payment_Method":"STRIPE", "Amount":"1000"}'

process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;