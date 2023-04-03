import React, { useEffect, useState } from 'react'
import './Place.css'
import { Navbar } from '../Components/Navbar'
import { Exploreplace } from '../Components/Exploreplace'
import { Link, useParams } from 'react-router-dom'

export const ExPlace = () => {
  const [District, setDistrict] = useState([]);

  const fetchData = () => {
    return fetch("https://script.google.com/macros/s/AKfycbx1ZrDNut7F7lqKxnJHOo1XWSDEHTzdCuBOQ3OyqTGTdf3rtbAROjzfLDpmddE8D9EX/exec")
      .then((response) => response.json())
      .then((Disdata) => setDistrict(Disdata));

  }

useEffect(() => {
  fetchData();

}, []);
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
  const {disslug} = params;
  const Districtname = []
  District.map((e)=> {
    if (e.disslug === disslug){
      Districtname.push(e)
      
  }
  })

  const Places = []
  Place.map((i)=> {
    if (i.disslug === disslug){
      Places.push(i)
      
  }
  })

  return (
    <div>
        <>
        <Navbar/>
        <div className='pop'>
            <div className='card-container  '>
              <div className='place-data d-flex'>
                {Districtname.map((e) => (
                    <>
                    <img src={e.coverimage} alt='image'/>
                  <div className='place-content'>
                    <h1>{e.disname}</h1>
                    <p>{e.discription}</p>
                  </div>
                  </>
                ))}
                
              </div>
              <h2>Explore</h2>
              <div className='place-container'>
                {Places.map(f => (
                   <div className='place-card'>
                      <Link to={f.slug}>
                     <img src={f.coverimage} alt='image'/>
                     <h3>{f.name}</h3>
                     </Link>
                     <p>{f.category}</p>
                     
                 </div>
                ))}
           
        </div>
            </div>
        </div>
        
        </>
        
    </div>
  )
}
