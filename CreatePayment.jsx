import React, { useState } from "react";
import axios from "axios";

function CreatePayment () {

const [Payment_ID, setPayment_ID] = useState("");
const [Player_ID, setPlayer_ID] = useState("");
const [Game_ID, setGame_ID] = useState("");
const [Payment_Method, setPayment_Method] = useState("");
const [Amount, setAmount] = useState("");
const [Date_Of_Payment, setDate_Of_Payemnt ] = useState("");
const [Time_Of_Payement, setTime_Of_Payment] = useState("");
const [Status_Of_Payment, setStatus_Of_Payment] = useState("");

async function handleCreatePayment() {
    try {
        const response = await axios.post('http://localhost:3000/payments',{
            Payment_ID,Player_ID,Game_ID,Payment_Method,Amount,Date_Of_Payment,Time_Of_Payement,Status_Of_Payment
        });

        const newPayment = response.data;
        console.log("New Payment created:", newPayment);
    }
    catch(error) {
        console.error("Error creating Payment:", error)
    }
}

return (
    <div>
        <h1>Create Payment</h1>
        <form>
            <input type="text" value={Payment_ID} onChange={(e) => setPayment_ID(e.target.value)} placeholder="Payment_ID" />
            <input type="text" value={Player_ID} onChange={(e) => setPlayer_ID(e.target.value)} placeholder="Player_ID" />
            <input type="text" value={Game_ID} onChange={(e) => setGame_ID(e.target.value)} placeholder="Game_ID" />
            <input type="text" value={Payment_Method} onChange={(e) => setPayment_Method (e.target.value)} placeholder="Payment_Method" />
            <input type="text" value={Amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
            <input type="text" value={Date_Of_Payment} onChange={(e) => setDate_Of_Payemnt(e.target.value)} placeholder="Date_Of_Payment" />
            <input type="text" value={Time_Of_Payement} onChange={(e) => setTime_Of_Payment(e.target.value)} placeholder="Time_Of_Payment" />
            <input type="text" value={Status_Of_Payment} onChange={(e) => setStatus_Of_Payment(e.target.value)} placeholder="Status_Of_Payment" />

            <button type="button" className="blue-button" onClick={handleCreatePayment}>Create Payment</button>
    </form>
    </div>
)
}

export default CreatePayment;