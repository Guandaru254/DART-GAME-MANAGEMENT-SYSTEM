//Import express
const express = require('express');

//Create a router instance
const router = express.router();

//Define API endpoints
//Create a route for player registration
router.post (`/`, (req,res) => {
    res.send ('Player Registered Successfully');
});

//Create a route for retrieving player information
router.get (`/:playerId`, (req,res) => {
    const plauerId = req.params.playerId;
});



