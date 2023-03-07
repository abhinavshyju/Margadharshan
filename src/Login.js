import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Main } from "./Pages/Main";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const loginResponse = await axios.post("http://localhost:5000/login", {
      body: { username: username, password: password },
    });

    console.log(loginResponse.data);
    if (loginResponse.data === "True") {
      navigate("/hero");
    }
    else{
      setLoginError(loginResponse.data)
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
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
              <div className="login-error">{loginError && loginError}</div>
              <center>
                <button type="submit">Login</button>
              </center>
              <center>
                <span>Need an account ? </span>
                <a href="/signup">Signup</a>{" "}
              </center>
            </form>
          </div>
        </div>
      </div>

      <div className="blur">
        <Main />
      </div>
    </div>
  );
};
export default Login;
