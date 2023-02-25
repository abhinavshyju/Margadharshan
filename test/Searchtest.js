import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import List from "./List"
import placeData from './placeData';

export const Searchtest = () => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <div className='list-div'>
      <List input={inputText} />
      </div>
     
    </div>
  )
}
