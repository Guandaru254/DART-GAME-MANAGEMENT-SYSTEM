import React, { useState } from "react";
import axios from "axios";

  function LoginPage(props) {
    const [ username,setUsername] = useState (''); 
    const [ password,setPassword] = useState ('');
    const [ error,setError ] = useState ('');
    const handleUsernameChange = (event) => {
        setUsername (event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword (event.target.value);
    };
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:3000/logins', { username,password, });
          const token = response.data.token;
           // Store the token in local storage or cookies
          // for future authenticated requests
         // Redirect to the desired page upon successful login
        // For example:      
       // history.push('/dashboard');
        }
        catch (error) {
          setError(error.response.data.error);
        }
    };
    return (
      <div>
        <h2>LOGIN</h2>
        { error && <p>{ error } </p> }

        <form onSubmit = { handleLogin }>
          <div>
            <label htmlFor = "useraname"> Username : </label>
            <input type="text" id="useraname" value={username} onChange={handleUsernameChange} />
          </div>
          <div>
            <label htmlFor = "password"> Password : </label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit" id="login"> Login </button>
        </form>
      </div>
    );
  }

  export default LoginPage;