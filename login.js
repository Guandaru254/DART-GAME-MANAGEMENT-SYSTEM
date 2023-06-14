const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');require('dotenv').config();

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME ,
});

connection.connect((err) => {
    if(err) {
        console.error('Database Connection Failed:', err);
        return;
    }
    console.log('Database Connection Successful');
});

// Middleware
app.use(bodyParser.json());

// Login Route
app.post('/login', (req, res) => {
    const { username,password } = req.body;
    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password],(err,results) => {
        if (err) {
            console.log('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        if(results.length === 0 ) {
            return res.status(404).json({ error: 'Invalid Username or Password' });
        }

    // GENERATE JWT Token
    const token = jwt.sign({ userId : results[0].id }, process.env.JWT_SECRET,{
        expiresIn : '1h', 
    });
        res.json({token});
    })
})

     // Start the server
app.litsen(port, () => {
    console.log('Server running on port ${port}');
});
