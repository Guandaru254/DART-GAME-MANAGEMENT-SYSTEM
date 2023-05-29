// Import express
const express = require('express');

// Import dependencies
const pool = require('./database');

// Perform Query
pool.query('SELECT * FROM dartgame_db.players', (error,results,fields)  => {
      if (error) {
        console.error ('Error executing query:', error);
      }
      else {
        console.log ('Query result:', results);
      }
});