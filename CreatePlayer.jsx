import React, { useState,useEffect } from "react";
import axios from "axios";


const [Name, setName] = useState("");
const [PhoneNo, setPhoneNo] = useState("");
const [Age, setAge] = useState("");
const [RegDate, setRegDate] = useState("");

async function createPlayer() {
    try {
        const response = await axios.post('./players',{
            Name,PhoneNo,Age,RegDate
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
            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={PhoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder="PhoneNo" />
            <input type="text" value={Age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
            <input type="text" value={RegDate} onChange={(e) => setRegDate(e.target.value)} placeholder="RegDate" />

            <button type="button" onClick={createPlayer}>Create Player</button>
    </form>
    </div>
)