import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Hero } from "./Components/Hero";

const SignUp = () => {
  const naviagte = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signupError, setSignupError] = useState("")
  // const [IsSignup, setIsSignup] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:5000/signup", {
      body: {
        username: username,
        password: password,
        email: email,
      },
    });

    if (response.data === "Success") {
      naviagte("/home");
    }
    else{
      setSignupError(response.data)
    }
  };

  return (
    <div className="container">
      <div className="Log">
        <div className="Log-container">
          <div className="logimg">
            <img
              src="https://seoimgak.mmtcdn.com/blog/sites/default/files/images/houseboat-in-kerala-summer-vacation.jpg"
              alt="image"
            />
          </div>
          <div className="Login">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="input-con">
                <label>
                  Username:
                  <br />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </label>
              </div>
              <br />
              <div className="input-con">
                <label>
                  Email:
                  <br />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <br />
              <div className="input-con">
                <label>
                  Password:
                  <br />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
              </div>
              <br />
              <div className="login-error">
                {signupError && signupError}
              </div>
              <center>
                <button type="submit">Sign Up</button>
              </center>
            </form>
            <p>Make contributor access account ? <a href='/agency_signup'>Sign Up</a></p>
          </div>
        </div>
      </div>
      <div className="blur">
        <Hero />
      </div>
    </div>
  );
};
export default SignUp;
