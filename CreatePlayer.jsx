import React, { useState } from "react";
import axios from "axios";

function CreatePlayer () {

const [Player_ID, setPlayer_ID] = useState("");
const [Player_Name, setPlayer_Name] = useState("");
const [Phone_Number, setPhone_Number] = useState("");
const [Age, setAge] = useState("");
const [Gender, setGender] = useState("");
const [Date_Registered, setDate_Registered] = useState("");



async function handleCreatePlayer() {
    try {
        const response = await axios.post('http://localhost:3000/players',{
            Player_ID,Player_Name,Phone_Number,Age,Gender,Date_Registered
        });

        const newPlayer = response.data;
        console.log("New player created:", newPlayer);
    }
    catch(error) {
        console.error("Error creating player:", error)
    }
}

return (
    <div>
        <h1>Create Player</h1>
        <form>
            <input type="text" value={Player_ID} onChange={(e) => setPlayer_ID(e.target.value)} placeholder="Player_ID" />
            <input type="text" value={Player_Name} onChange={(e) => setPlayer_Name(e.target.value)} placeholder="Player_Name" />
            <input type="text" value={Phone_Number} onChange={(e) => setPhone_Number(e.target.value)} placeholder="PhoneNo" />
            <input type="text" value={Age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
            <input type="text" value={Gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
            <input type="text" value={Date_Registered} onChange={(e) => setDate_Registered (e.target.value)} placeholder="RegDate" />
         


            <button type="button" className="blue-button" onClick={handleCreatePlayer}>Create Player</button>
    </form>
    </div>
)
}

export default CreatePlayer;