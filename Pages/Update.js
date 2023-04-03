import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
      
      const naviagte = useNavigate();
  const [data, setUpdate] = useState("");
  const [signupError, setSignupError] = useState("")
  // const [IsSignup, setIsSignup] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:5000/update", {
      body: {
        data: data,
      },
    });
  };

  return (
            <form onSubmit={handleSignUp}>
              <div className="input-con">
                <label>
                 update
                  <br />
                  <input
                    type="text"
                    value={data}
                    onChange={(e) => setUpdate(e.target.value)}
                    required
                  />
                </label>
              </div>
              <br />
              <center>
                <button type="submit">update</button>
              </center>
            </form>
  )
}

export default Update