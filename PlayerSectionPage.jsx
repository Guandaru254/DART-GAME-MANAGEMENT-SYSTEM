import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,IconButton} from '@material-ui/core';
import {Edit,Delete} from '@material-ui/icons';


function PlayerSectionPage () {
       const [players, setPlayers] = useState ([]);
       const [Player_Name, setPlayer_Name] = useState ('');
       const [Phone_Number, setPhone_Number] = useState ('');
       const [Age, setAge] = useState ('');
       const [Gender, setGender] = useState ('');
       const [Date_Registered, setDate_Registered] = useState ('');
       const [Preferred_Hand, setPreferred_Hand] = useState ('');


useEffect ( () => {
    fetchPlayers (); }, []); 


async function fetchPlayers () { 
        try{
            const response = await axios.get('/players');
            setPlayers(response.data);
        }
        catch (error) {
            console.error('Error fetching players:', error);
        }
}


    async function updatePlayer (playerID,updatedData) {
        try {
        const response = await axios.put(`/players/${playerID}`,updatedData);
        setPlayers( (prevPlayers) => 
        prevPlayers.map( (player) => 
        player.id === player.ID ? { ...playerID,...updatedData } : player 
           )
        );
    }
    catch (error) {
        console.error('Error updating player', error);
    }
}


async function deletePlayer (playerID) {
    try {
        await axios.delete('/players/${playerID}'); 
        setPlayers( (prevPlayers) => 
        prevPlayers.filter( (player) =>
        player.id !== playerID)
        )
    }
    catch (error) {
        console.error('Error deleting player', error);
    }  
}   



return (
    <div>
        <h1>PLAYER SECTION</h1>
   <Link to = "/create-player">
    <button className="blue-button">Create Player</button>
   </Link>
   
   <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Player_ID</TableCell>
              <TableCell>Player_Name</TableCell>
              <TableCell>Phone_Number</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Date_Registered</TableCell>
              <TableCell>Preferred_Hand</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player) => (
              <TableRow key={player.id}>
                <TableCell>{player.id}</TableCell>
                <TableCell>{player.Player_Name}</TableCell>
                <TableCell>{player.Phone_Number}</TableCell>
                <TableCell>{player.Age}</TableCell>
                <TableCell>{player.Gender}</TableCell>
                <TableCell>{player.Date_Registered}</TableCell>
                <TableCell>{player.Preferred_Hand}</TableCell>
       <TableCell>
        <IconButton onClick = {() =>  updatePlayer(player.id, updatedData)}>
        <Edit/>
        </IconButton>
        <IconButton onClick = {() => deletePlayer(player.id)}>
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

            
export default PlayerSectionPage;