import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,IconButton} from '@material-ui/core';
import {Edit,Delete} from '@material-ui/icons';


function PaymentsPage () {
       const [Payments, setPayments] = useState ([]);
       const [Player_ID, setPlayer_ID] = useState ('');
       const [Game_ID, setGame_ID] = useState ('');
       const [Payment_Method, setPayment_Method] = useState ('');
       const [Amount, setAmount] = useState ('');
       const [Date_Of_Payment, setDate_Of_Payment] = useState ('');
       const [Time_Of_Payment, setTime_Of_Payment] = useState ('');
       const [Status_Of_Payment, setStatus_Of_Payment] = useState ('');


useEffect ( () => {
    fetchPayments (); }, []); 


async function fetchPayments () { 
        try{
            const response = await axios.get('/payments');
            setPayments(response.data);
        }
        catch (error) {
            console.error('Error fetching payments:', error);
        }
}


    async function updatePayment (PaymentID,updatedData) {
        try {
        const response = await axios.put(`/payments/${paymentID}`,updatedData);
        setPayments( (prevPayments) => 
        prevPayments.map( (payment) => 
        payment.id === payment.ID ? { ...paymentID,...updatedData } : payment 
           )
        );
    }
    catch (error) {
        console.error('Error updating payment', error);
    }
}


async function deletePayment (paymentID) {
    try {
        await axios.delete('/payments/${paymentID}'); 
        setPayments( (prevPayments) => 
        prevPayments.filter( (payment) =>
        payment.id !== paymentID)
        )
    }
    catch (error) {
        console.error('Error deleting payment', error);
    }  
}   



return (
    <div>
        <h1>PAYMENT SECTION</h1>
   <Link to = "/create-payment">
    <button className="blue-button">Create Payment</button>
   </Link>
   
   <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Payment_ID</TableCell>
              <TableCell>Player_ID</TableCell>
              <TableCell>Game_ID</TableCell>
              <TableCell>Payment_Method</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date_Of_Payment</TableCell>
              <TableCell>Time_Of_Payment</TableCell>
              <TableCell>Status_Of_Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.Player_ID}</TableCell>
                <TableCell>{payment.Game_ID}</TableCell>
                <TableCell>{payment.Payment_Method}</TableCell>
                <TableCell>{payment.Amount}</TableCell>
                <TableCell>{payment.Date_Of_Payment}</TableCell>
                <TableCell>{payment.Time_Of_Payment}</TableCell>
                <TableCell>{payment.Status_Of_Payment}</TableCell>
       <TableCell>
        <IconButton onClick = {() =>  updatePayment(payment.id, updatedData)}>
        <Edit/>
        </IconButton>
        <IconButton onClick = {() => deletePayment(payment.id)}>
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

            
export default PaymentsPage;