import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import './Popular.css'

export const Popular = () => {
    const [Place, setPlace] = useState([]);

    const fetchDatas = () => {
      return fetch("https://script.google.com/macros/s/AKfycbwVlBkemc23x3_nwPykmPgeM-YYjMKPa9oDdHJhfgKeyneEnX2cqncshGOeCUnXMq4p/exec")
        .then((response) => response.json())
        .then((placedata) => setPlace(placedata));
    
    }
    
    useEffect(() => {
    fetchDatas();
  
    
    }, []);
  
    const n =3;
  return (
    <div className='pop'>
        <div className='heading'>
            <h1>Popular Places</h1>
             <Link to={`/explore`}><span>See all</span></Link>
        </div>
        <div className='place-container'>
            {
                 Place.slice(0, n).map(D => (
                    <div className='place-card'>
                        <Link to={`/${D.disslug}/${D.slug}`}>
                    <img src={D.coverimage} alt='image'/>
                    <h3>{D.name}</h3>
                    </Link>
                    <p>{D.category}</p>
                </div>
                 ))
            }   
            
        </div>
        <Routes>
            <Route/>
        </Routes>
        
    </div>
  )
}
