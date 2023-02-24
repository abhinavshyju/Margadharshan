import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Main } from "./Pages/Main";
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Islogged, setIslogged] = useState(false)
  
    const handleLogin = (event) => {
      event.preventDefault();
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      if (username === storedUsername && password === storedPassword) {   
             setIslogged(true);
      } else {
        alert('Invalid username or password!');
      }
    };
    if (Islogged) {
      return (
        <div>
         <Main/>
        </div>
      );
    }
  
    return (
        <div className="container">
      <div className="Log">
        <div className="Log-container">
                <div className="logimg">
                    <img src="https://seoimgak.mmtcdn.com/blog/sites/default/files/images/houseboat-in-kerala-summer-vacation.jpg" alt="image"/>
                </div>
        <div className="Login">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
        <div className="input-con">
          <label>
            Username:<br/> 
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            </div>
         
          <br />
          <div className="input-con">
          <label>
            Password:
            <br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            </div>
          <br />
          <center><button type="submit">Login</button></center>
          <center><span>Need an account ? </span><a href="/signup">Signup</a> </center>
        </form>
        </div>
      </div>
        </div>
       
      <div className="blur">
      <Main/>
      </div>
      </div>
      
    );
  };
  export default Login;