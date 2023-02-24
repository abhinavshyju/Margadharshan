import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Popular.css'

export const Exploreplace = () => {
    const [District, setDistrict] = useState([]);

    const fetchData = () => {
      return fetch("https://script.google.com/macros/s/AKfycbx1ZrDNut7F7lqKxnJHOo1XWSDEHTzdCuBOQ3OyqTGTdf3rtbAROjzfLDpmddE8D9EX/exec")
        .then((response) => response.json())
        .then((Disdata) => setDistrict(Disdata));
  
    }

  useEffect(() => {
    fetchData();

  }, []);
  
  const n = 6;
  return (
    <div className='pop'>
        <h1>Explore Place</h1>
        <div className='place-container'>
            {
                District.slice(0, n).map(D => (
                // District.map(D => (
                    <div className='place-card'>
                        <Link to={D.disslug}>
                        <img src={D.coverimage} alt='image'/>
                        <h3>{D.disname}</h3>
                        </Link>
                        <p>{D.sshortdiscription} </p>
                    </div>
                ))
            }
          
        </div>
        <div className='jcc'>
            <div className='button'><Link to='/explore' ><span>See More  </span></Link></div>
        </div>
    </div>
  )
}
