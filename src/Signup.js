import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Login from './Login';
import { Main } from './Pages/Main';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [IsSignup, setIsSignup] = useState(false);

  const handleSignUp = (event) => {
    setIsSignup(true);
    event.preventDefault();
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
  };
if (IsSignup) {
    return (
      <div>
       <Login/>
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
      <div className="input-con">
        <label>
          Username:<br/>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        </div>
        <br />
        <div className="input-con">
        <label>
          Password:<br/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
        <br />
        <center><button type="submit">Sign Up</button></center>
        
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
export default SignUp;