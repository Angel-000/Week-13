import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  // State variables to store username, password, and login status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle the login attempt
  const handleLogin = () => {
    // Check if the entered username and password are correct
    if (username === 'angel' && password === 'angel') {
      // If correct, set the isLoggedIn state to true
      setIsLoggedIn(true);
    } else {
      // If incorrect, show an alert
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-form">
      <h3>Log In</h3>
      <input    //  Input field for username
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input    //  Input field for password
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}  
        
        //Button to trigger the login attempt
      />                                          
      <button onClick={handleLogin}>Login</button> 
      {isLoggedIn && <p>Welcome, {username}!</p>} 
    </div>   // Display a welcome message if the user is logged in 
  );
};

export default LoginForm;

