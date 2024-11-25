import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Style.css'
import MyClass from './Myclass'; // Ensure Myclass.js exports something like a React component 


function App() {
  return (
    <>
      <div className="App" > 
        <main>
          {/* Use MyClass component */}
          <MyClass/>
        </main>
      </div>
    </>
  );
}

export default App;


// import './Inapp.js'
// import './Myco.js'
// import ''

// import React ,{useState} from 'react';
// import Zee from './Inapp.js';
// import See from './Myco.js';

// function Zee(){
//   return(
//     <>
//     <h1 style={{backgroundColor:'red',fontSize:'40px',height:'50px',width:'100px'}}>hello</h1>
//     </>
//   )
// }

// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }
// function MyApp() {
//   return (
//     <div>
//       <Zee/>
//       <See/>
//       <h1>Welcome to my app</h1>

      
//     </div>
//   );







// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }

// export default Zee ;

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your authentication logic here (e.g., calling an API)
//     console.log('Username:', username);
//     console.log('Password:', password);
//     // Reset the form
//     setUsername('');
//     setPassword('');
//   };

//   return (
//     <div className="App">
//       <div className="login-container">
//         <form onSubmit={handleSubmit}>
//           <h2>Login</h2>
//           <div className="form-control">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-control">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;



