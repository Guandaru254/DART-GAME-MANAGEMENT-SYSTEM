import React, { useState } from "react";
import axios from "axios";

function CreateBoard () {

const [Board_ID, setBoard_ID] = useState("");
const [Board_Name, setBoard_Name] = useState("");
const [Board_Model, setBoard_Model] = useState("");
const [Board_Location, setBoard_Location] = useState("");
const [Is_Available, setIs_Available] = useState("");

async function handleCreateBoard() {
    try {
        const response = await axios.post('http://localhost:3000/boards',{
            Board_ID,Board_Name,Board_Model,Board_Location,Is_Available
        });

        const newBoard = response.data;
        console.log("New Board created:", newBoard);
    }
    catch(error) {
        console.error("Error creating Board:", error)
    }
}

return (
    <div>
        <h1>Create Board</h1>
        <form>
            <input type="text" value={Board_ID} onChange={(e) => setBoard_ID(e.target.value)} placeholder="Board_ID" />
            <input type="text" value={Board_Name} onChange={(e) => setBoard_Name (e.target.value)} placeholder="Board_Name" />
            <input type="text" value={Board_Model} onChange={(e) => setBoard_Model(e.target.value)} placeholder="Board_Model" />
            <input type="text" value={Board_Location} onChange={(e) => setBoard_Location(e.target.value)} placeholder="Board_Model" />
            <input type="text" value={Is_Available} onChange={(e) => setIs_Available(e.target.value)} placeholder="Is_Available" />
           

            <button type="button" className="blue-button" onClick={handleCreateBoard}>Create Board</button>
    </form>
    </div>
)
}

export default CreateBoard;