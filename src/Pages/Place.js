import React from 'react'
import './Place.css'
import { Navbar } from '../Components/Navbar'
import { useState } from 'react';

export const Place= () => {
    const [inputValue, setInputValue] = useState('');
  const [sections, setSections] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddSection = () => {
    setSections([...sections, inputValue]);
    setInputValue('');
  };
  return (
    <div>
        <>
        <Navbar/>
        <div className='pop'>
            <div className='card-container  '>
              <div className='place-data d-flex'>
                  <img src='https://images.livemint.com/img/2023/02/07/1600x900/kerala-tourism_1675753250452_1675753262214_1675753262214.jpg' alt='image'/>
                <div className='place-content'>
                  <h1>Place1</h1>
                  <p>discription</p>
                </div>
              </div>

              <div className='place-images'>
                <h3>Photos</h3  >
                <div className='img-container'>
                    <img src='https://www.w3schools.com/css/img_lights.jpg' alt=''/>
                    <img src='https://www.w3schools.com/css/img_lights.jpg' alt=''/>
                    <img src='https://www.w3schools.com/css/img_lights.jpg' alt=''/>
                    <img src='https://www.w3schools.com/css/img_lights.jpg' alt=''/>
                </div>
              </div>
              <div className='Review-sec'>
              <h3>Review</h3> 
                
                <div className='Review'>
                
                  <div className='reviewer-input'>
                    <img src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt='notfount'/>
                    <input value={inputValue} onChange={handleInputChange} />
                    <button onClick={handleAddSection}>✔</button>
                   
                  </div>
                  <div className='review-output'>
                  <ul>  
                      {sections.map((section) => (
                        <li> <img src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt='notfount'/> <p>{section}</p></li>
                      ))}
                    </ul>
                  </div>
                 
                </div>
              </div>
            </div>
        </div>
        
        </>
        
    </div>
  )
}
