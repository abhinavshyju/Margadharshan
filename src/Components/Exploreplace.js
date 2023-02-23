import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Popular.css'

export const Exploreplace = () => {
    const [District, setDistrict] = useState([]);

    const fetchData = () => {
      return fetch("https://script.google.com/macros/s/AKfycbxioHwX2fi1E6Nxyw4vfLF_ZkE3tnJacQVnVCCTtJDobr4a0X9cWbf6W46Am-L4Zk0T/exec")
        .then((response) => response.json())
        .then((Disdata) => setDistrict(Disdata));
  
    }

  useEffect(() => {
    fetchData();

  }, []);
  // const n = 3;
  return (
    <div className='pop'>
        <h1>Explore Place</h1>
        <div className='place-container'>
            {
                // District.slice(0, n).map(D => (
                District.map(D => (
                    <div className='place-card'>
                        <Link to={'/place'}>
                        <img src={D.coverimage} alt='image'/>
                        <h3>{D.disname}</h3>
                        </Link>
                        <p>{D.discription} </p>
                    </div>
                ))
            }
          
        </div>
        <div className='jcc'>
            <div className='button'><a href='/explore' ><span>See More  </span></a></div>
        </div>
    </div>
  )
}
