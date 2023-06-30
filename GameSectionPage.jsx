import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,IconButton} from '@material-ui/core';
import {Edit,Delete} from '@material-ui/icons';


function GameSectionPage () {
       const [games, setGames] = useState ([]);
       const [Player_ID, setPlayer_ID] = useState ('');
       const [Game_Type, setGame_Type] = useState ('');
       const [Date_Played, setDate_Played] = useState ('');


useEffect ( () => {
    fetchGames (); }, []); 


async function fetchGames () { 
        try{
            const response = await axios.get('/games');
            setGames(response.data);
        }
        catch (error) {
            console.error('Error fetching games:', error);
        }
}


    async function updateGame (gameID,updatedData) {
        try {
        const response = await axios.put(`/games/${gameID}`,updatedData);
        setGames( (prevGames) => 
        prevGames.map( (game) => 
        game.id === game.ID ? { gameID, updatedData } : game 
           )
        );
    }
    catch (error) {
        console.error('Error updating game', error);
    }
}


async function deleteGame (gameID) {
    try {
        await axios.delete('/games/${gameID}'); 
        setGames( (prevGames) => 
        prevGames.filter( (game) =>
        game.id !== gameID)
        )
    }
    catch (error) {
        console.error('Error deleting game', error);
    }  
}   



return (
    <div>
        <h1>GAME SECTION</h1>
   <Link to = "/create-game">
    <button className="blue-button">Create Game</button>
   </Link>
   
   <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Game_ID</TableCell>
              <TableCell>Player_ID</TableCell>
              <TableCell>Game_Type</TableCell>
              <TableCell>Date_Played</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {games.map((game) => (
              <TableRow key={game.id}>
                <TableCell>{game.id}</TableCell>
                <TableCell>{game.Player_ID}</TableCell>
                <TableCell>{game.Game_Type}</TableCell>
                <TableCell>{game.Date_Played}</TableCell>
       <TableCell>
        <IconButton onClick = {() =>  updateGame(game.id, updateData)}>
        <Edit/>
        </IconButton>
        <IconButton onClick = {() => deleteGame(game.id)}>
            <Delete/>
        </IconButton>
        </TableCell>
        </TableRow>
        ))}
        </TableBody>
        </Table>
        </TableContainer>
    </div>
);
            }

            
export default GameSectionPage;