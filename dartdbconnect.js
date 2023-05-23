// Import mysql module
const mysql = require ('mysql');

// create a connection pool 
const pool = mysql. 
  createPool (
    {  
        host : 'localhost',
        user : 'root',
        password : ' ',
        database : 'dartgame_db'
    });
  
    // Create a connection pool wrapper object
    const db = {};

    // Execute a query using the connection pool
    db.query = (sql,values) => {
      return new Promise((resolve,reject) => {
        pool.getConnection ((err, connection) => {
          if (err) {
            reject (err) ;
            return ;
          }
          connection.query (sql, values, (err, result) => {
            connection.release ();
            if (err) {
              reject (err);
            }
            else {
              resolve(result);
            }
          });
        });
      });
    }
    
    // Export the database object
module.exports = db;