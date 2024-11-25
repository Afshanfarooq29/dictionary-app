import React, { useState } from "react";
import './Style.css'

const Signup = () => {
  // Initialize state for form data
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Handle input change
  const handleInput = (e) => {
    
    const { name, value } = e.target;
    
    setInputData({
      ...inputData,
      [name]: value,
    });
    
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(inputData); // Log the input data or send it to the backend
  };

  return (
    <>
    <div style={{}}>
    <form className="container" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <div className="inputs">
        <input
          type="text"
          name="name" // Set name attribute to identify this input
          placeholder="Name"
          value={inputData.name} // Set value from state
          onChange={handleInput} // Capture changes
        />
        <input
          type="email"
          name="email" // Set name attribute to identify this input
          placeholder="Email"
          value={inputData.email} // Set value from state
          onChange={handleInput} // Capture changes
        />
        <input
          type="password"
          name="password" // Set name attribute to identify this input
          placeholder="Password"
          value={inputData.password} // Set value from state
          onChange={handleInput} // Capture changes
        />
      </div>
      <button type="submit">Signup</button>
    </form>
    </div>
    </>
  );
};

export default Signup;
