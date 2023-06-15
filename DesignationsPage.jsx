import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { getAllDesignations,deleteDesignations } from 'http//:localhost:3000/designations';

  function DesignationsPage (props) { 
    const [  designations,setDesignations] = useState([]);
    const history = useHistory();
    const handleAddDesignation = () => {
        // Logic for adding a new designation
       // Redirect or show a modal for adding designation
    };
    const handleViewAllDesignations = () => {
        // Fetch all Designations from API
    const designationsData = getAllDesignations();
        // Implement this function in the API file
       // Update the designation state with the fetched designation data
    setDesignations(designationsData); 
    };
    const handleDeleteDesignation = (designationID) => {
        // Logic for deleting designation
    deleteDesignation(designationID);  
        // Implement this function in the API file
        // Update the designation state after deleting the designation
    const updatedDesignations = designation.filter((designation) => designation.id !== designationId); 
       setDesignations (updatedDesignations);
    };
    const handleUpdateDesignations = (designationId) => {
        // Logic for updating the designation
        // Redirect or show a modal for updating the designation
    };
    const handleLogout = () => {
        // Logout Logic
       history.push('/login')
    };
    return (
        <div>
            <h3>Designation Page</h3>
            <div>
                <button type="button" onClick={ handleAddDesignation }>
                    Record Designation
                </button>
                <button type="button" onClick={ handleViewAllDesignations }>
                    View All Designations
                </button>
                <button type="button" onClick={ handleLogout }>
                    Logout
                </button>
            </div>

            { designations.length > 0 ? (
               <table>
                <thead>
                    <tr>
                        <th>Designation ID</th>
                        <th>Designation Role</th>
                        <th>Hire Date</th>
                    </tr>
                </thead>
                <tbody>

                  { designations.map((designation) => ( 
                    <tr key={designation.id}>
                    <td> { designation.designationID } </td>
                    <td> { designation.designationID } </td>
                    <td> { designation.designationID } </td>
                    <td> <button onClick={() =>  handleUpdateDesignation(designation.id)}>Update</button> </td>
                    <td> <button onClick={() =>  handleDeleteDesignation(designation.id)}>Delete</button> </td>
                    </tr>
                  ))}

                </tbody>
               </table>
            ) : (
                <p>No Designations Available</p>
            )}

        </div>
    );
  }

  export default DesignationsPage;