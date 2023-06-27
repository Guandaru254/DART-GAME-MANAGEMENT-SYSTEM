import React, { useState } from "react";
import axios from "axios";

function CreateStaff () {

const [Staff_ID, setStaff_ID] = useState("");
const [Board_ID, setBoard_ID] = useState("");
const [Phone_Number, setPhone_Number] = useState("");
const [Staff_Name, setStaff_Name] = useState("");
const [Gender, setGender] = useState("");
const [Age, setAge] = useState("");
const [Hire_Date, setHire_Date] = useState("");
const [Designation_ID, setDesignation_ID] = useState("");

async function handleCreateStaff() {
    try {
        const response = await axios.post('./staff',{
            Staff_ID,Board_ID,Phone_Number,Staff_Name,Gender,Age,Hire_Date,Designation_ID
        });

        const newStaff = response.data;
        console.log("New Staff created:", newStaff);
    }
    catch(error) {
        console.error("Error creating Staff:", error)
    }
}

return (
    <div>
        <h1>Create Staff</h1>
        <form>
            <input type="text" value={Staff_ID} onChange={(e) => setStaff_ID(e.target.value)} placeholder="Staff_ID" />
            <input type="text" value={Board_ID} onChange={(e) => setBoard_ID(e.target.value)} placeholder="Board_ID" />
            <input type="text" value={Phone_Number} onChange={(e) => setPhone_Number(e.target.value)} placeholder="Phone_Number" />
            <input type="text" value={Staff_Name} onChange={(e) => setStaff_Name(e.target.value)} placeholder="Staff_Name" />
            <input type="text" value={Gender} onChange={(e) => setGender(e.target.value)} placeholder="Gender" />
            <input type="text" value={Age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
            <input type="text" value={Hire_Date} onChange={(e) => setHire_Date(e.target.value)} placeholder="Hire_Date" />
            <input type="text" value={Designation_ID} onChange={(e) => setDesignation_ID(e.target.value)} placeholder="Designation_ID" />
           

            <button type="button" className="blue-button" onClick={handleCreateStaff}>Create Staff</button>
    </form>
    </div>
)
}

export default CreateStaff;