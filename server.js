// Import dependencies 
const express = require ( 'express' );

const bodyParser = require ( 'body-parser' );

const app = express();

const port = 3000;

// Middleware Setup
app.use (body.Parser.json());

// Route : GET 
app.get ('/', (req, res) => {
    res.send ('Hello World!');
});

// Error Handling
app.use ((err,req,res,next) => {

});

// Start the server
app.listen (port, () => {
    console.log ('Server listening on port ${port}');
});