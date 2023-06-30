import React, { useState } from "react";
import axios from "axios";

function CreateDesignation () {

const [Designation_ID, setDesignation_ID] = useState("");
const [Designation_Role, setDesignation_Role] = useState("");
const [Hire_Date, setHire_Date] = useState("");

async function handleCreateDesignation() {
    try {
        const response = await axios.post('http://localhost:3000/designations',{
            Designation_ID,Designation_Role,Hire_Date
        });

        const newDesignation = response.data;
        console.log("New Designation created:", newDesignation);
    }
    catch(error) {
        console.error("Error creating Designation:", error)
    }
}

return (
    <div>
        <h1>Create Designation</h1>
        <form>
            <input type="text" value={Designation_ID} onChange={(e) => setDesignation_ID(e.target.value)} placeholder="Designation_ID" />
            <input type="text" value={Designation_Role} onChange={(e) => setDesignation_Role(e.target.value)} placeholder="Designation_Role" />
            <input type="text" value={Hire_Date} onChange={(e) => setHire_Date(e.target.value)} placeholder="Hire_Date" />

            <button type="button" className="blue-button" onClick={handleCreateDesignation}>Create Designation</button>
    </form>
    </div>
)
}

export default CreateDesignation;