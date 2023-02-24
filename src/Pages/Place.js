import React, { useEffect } from 'react'
import './Place.css'
import { Navbar } from '../Components/Navbar'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddressMap } from '../Components/mapAdress';

export const Place= () => {

  const [Place, setPlace] = useState([]);

  const fetchDatas = () => {
    return fetch("https://script.google.com/macros/s/AKfycbwVlBkemc23x3_nwPykmPgeM-YYjMKPa9oDdHJhfgKeyneEnX2cqncshGOeCUnXMq4p/exec")
      .then((response) => response.json())
      .then((placedata) => setPlace(placedata));
  
  }
  
  useEffect(() => {
  fetchDatas();

  
  }, []);

  const params = useParams();
  const {slug} = params;
  const Places = []
  Place.map((i)=> {
    if (i.slug === slug){
      Places.push(i)
      
  }
  })  


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
                {Places.map(e =>(
                  <>
                  <img src={e.coverimage} alt='image'/>
                <div className='place-content'>
                  <h1>{e.name}</h1>
                  <p>{e.discription}</p>
                </div>
                </>
                ))}
                  
              </div>

              {/* <div className='place-images'>
                <h3>Photos</h3  >
                <div className='img-container'>
                  {Places .map(u =>(
                     <img src={u} alt='name'/>
                  ))}
                   
                </div>
              </div> */}
              <div className='d-flex r-m'>

              <div className='map'><AddressMap/></div> 
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
               <h2>Pakages</h2>
              <div className='map d-flex jcc packs'>
                <div className='pack'>
                          <img src='https://media-cdn.tripadvisor.com/media/photo-s/14/b8/c9/e7/elixir-hills.jpg' alt=''/>
                          <h3>Hotel name</h3> 
                </div>
                <div className='pack'>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus4ABbn8n9WHWS80xKyMbTH-qA_iDrFI68w&usqp=CAU' alt=''/>
                          <h3>Hotel name</h3> 
                </div>
                <div className='pack'>
                          <img src='https://www.tourmyindia.com/hotelsinindia/images/hill-view-2.jpg' alt=''/>
                          <h3>Hotel name</h3> 
                </div>
                <div className='pack'>
                          <img src='https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_230,q_auto,w_305/v1/filestore/haoxguwzxijqpkx0nusei734r82h_3a32e5de-e5a0-439e-a842-459f1854ec7e.jpg' alt=''/>
                          <h3>Hotel name</h3> 
                </div>
                
              
              </div>
              
            </div>
        </div>
        
        </>
        
    </div>
  )
}
