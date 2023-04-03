import React, { useEffect } from 'react'
import './Place.css'
import { Navbar } from '../Components/Navbar'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddressMap } from '../Components/mapAdress';
import submit from './submit.png'

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

  const [Data, setData] = useState([]);

  const fetchDatastwo = () => {
    return fetch("http://localhost:5000/data_view")
      .then((response) => response.json())
      .then((data) => setData(data));
  
  }
  
  useEffect(() => {
  fetchDatastwo();

  
  }, []);

  const params = useParams();
  const {slug} = params;
  const Places = []
  Place.map((i)=> {
    if (i.slug === slug){
      Places.push(i)
      
  }
  })  
  const Package = []
  Data.map((i)=> {
    if (i.place === slug){
      Package.push(i)
      
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

              <div className='d-flex r-m'>

              <div className='map'><AddressMap/></div> 
              <div className='Review-sec'>
                  <div className='Review'>
                  <p className='shareyour'>Share yor thoughts</p>
                    <div className='reviewer-input'>
                      <textarea value={inputValue} onChange={handleInputChange} placeholder="Add a review" />
                      <button onClick={handleAddSection}> <img src={submit}/>  </button>
                    
                    </div>
                    <div className='review-output'>
                    <ul>  
                      <li><p>It was a wonder full experience</p></li>
                         <li><p>Wow ! great</p></li>
                        {sections.map((section) => (
                          <li><p>{section}</p></li>
                         
                        ))}
                         
                      </ul>
                    </div>
                  
                  </div>
                </div>
              </div>
               <h2>Packages</h2>
              <div className='map d-flex jcc packs'>
                {Package.map(e=> (
                    <div className='pack'>
                      <img src={e.image} alt=''/>
                      <div className='d-flex jcs'>
                      <h3>{e.name}</h3> 
                      <h4 className='m-0'>{e.price}</h4>
                      </div>
                      <h4>{e.discription}</h4>
                    </div>
                ))}

              </div>
              
            </div>
        </div>
        
        </>
        
    </div>
  )
}
