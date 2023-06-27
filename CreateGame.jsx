import React, { useState } from "react";
import axios from "axios";

function CreateGame () {

const [Game_ID, setGame_ID] = useState("");
const [Player_ID, setPlayer_ID] = useState("");
const [Game_Type, setGame_Type] = useState("");
const [Game_Status, setGame_Status] = useState("");

async function handleCreateGame() {
    try {
        const response = await axios.post('./games',{
            Game_ID,Player_ID,Game_Type,Game_Status
        });

        const newGame = response.data;
        console.log("New game created:", newGame);
    }
    catch(error) {
        console.error("Error creating game:", error)
    }
}

return (
    <div>
        <h1>Create Game</h1>
        <form>
            <input type="text" value={Game_ID} onChange={(e) => setGame_ID(e.target.value)} placeholder="Game_ID" />
            <input type="text" value={Player_ID} onChange={(e) => setPlayer_ID(e.target.value)} placeholder="Player_ID" />
            <input type="text" value={Game_Type} onChange={(e) => setGame_Type(e.target.value)} placeholder="Game_Type" />
            <input type="text" value={Game_Status} onChange={(e) => setGame_Status (e.target.value)} placeholder="Game_Status" />

            <button type="button" className="blue-button" onClick={handleCreateGame}>Create Game</button>
    </form>
    </div>
)
}

export default CreateGame;