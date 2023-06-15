import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { getAllPayments,deletePayments } from 'http//:localhost:3000/payments';

  function PaymentsPage (props) {
    const [  payments,setPayments] = useState([]);
    const history = useHistory();
    const handleRecordPayment = () => {
        // Logic for recording a new payment
       // Redirect or show a modal for recording payment
    };
    const handleViewAllPayments = () => {
        // Fetch all payments from API
    const paymentsData = getAllPayments();
        // Implement this function in the API file
       // Update the payment state with the fetched payment data
    setPayments(paymentsData); 
    };
    const handleDeletePayment = (paymentID) => {
        // Logic for deleting payment
    deletePayment(paymentID);  
        // Implement this function in the API file
        // Update the payment state after deleting the payment
    const updatedPayments = payments.filter((payment) => payment.id !== paymentId); 
       setPayments (updatedPayments);
    };
    const handleUpdatePayment = (paymentId) => {
        // Logic for updating the payment
        // Redirect or show a modal for updating the payment
    };
    const handleLogout = () => {
        // Logout Logic
       history.push('/login')
    };
    return (
        <div>
            <h3>Payments Page</h3>
            <div>
                <button type="button" onClick={ handleRecordPayment }>
                    Record Payment
                </button>
                <button type="button" onClick={ handleViewAllPayments }>
                    View All Payment
                </button>
                <button type="button" onClick={ handleLogout }>
                    Logout
                </button>
            </div>

            { payments.length > 0 ? (
               <table>
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Player ID</th>
                        <th>Game ID</th>
                        <th>Payment Method</th>
                        <th>Amount</th>
                        <th>Date of Payment</th>
                        <th>Time of Payment</th>
                        <th>Status of Payment</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                  { payments.map((payment) => ( 
                    <tr key={payment.id}>
                    <td> { payment.paymentID } </td>
                    <td> { payment.playerID } </td>
                    <td> { payment.gameID } </td>
                    <td> { payment.paymentMethod } </td>
                    <td> { payment.amount } </td>
                    <td> { payment.dateofPayment } </td>
                    <td> { payment.timeofPayment } </td>
                    <td> { payment.statusofPayment } </td>
                    <td> <button onClick={() =>  handleUpdatePayment(payment.id)}>Update</button> </td>
                    <td> <button onClick={() =>  handleDeletePayment(payment.id)}>Delete</button> </td>
                    </tr>
                  ))}

                </tbody>
               </table>
            ) : (
                <p>No Payments Available</p>
            )}

        </div>
    );
  }

  export default PaymentsPage;