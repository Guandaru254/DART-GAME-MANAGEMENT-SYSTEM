// Import dependencies

const mysql = require('mysql');

const dbConfig = {
    host : 'localhost',
    user : 'root',
    password : 'guandaru',
    database : 'dartgame_db',
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

module.exports = pool;