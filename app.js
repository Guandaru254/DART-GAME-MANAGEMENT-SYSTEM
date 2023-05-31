// Import dependencies 
const express = require ( 'express' );

const players = require( './players' );

const payments = require('./payments');

const scores = require('./scores');

const games = require('./games');

const boards = require('./boards');

const darts = require('./darts');

const staff = require('./staff');

const designations = require('./designations');

//const bodyParser = require ( 'body-parser' );

//const playersRouter = require( './players');

const app = express();

const port = 3000;

// Middleware Setup
 //app.use (bodyParser.json());

// Mount the Router
app.use ('/players', players);

app.use ('/payments', payments);

app.use ('/scores' , scores);

app.use ('/games', games);

app.use ('/boards', boards);

app.use ('/darts', darts);

app.use ('/staff', staff);

app.use ('/designations', designations);

//app.use ('./players', playersRouter);

// Start the server
app.listen (port, () => {
    console.log ('Server listening on port 3000');
});