import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import List from "./DataList/List"

export const Navbar = () => {
  const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  return (
    <div className='nav-bar'>
           <Link to='/'><span  className='logo'>MARGADHARSHAN</span></Link> 
           <div className='search'>
                <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search"
              />
               <div className='list-div'>
      <List input={inputText} />
      </div>
           </div>
           
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            
            <div className='log-con'>
            <span className='login'>Signup | Login</span>
            </div>
        </div>
  )
}
