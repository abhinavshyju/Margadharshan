import React, { useEffect, useState } from 'react'

const UpdateView = () => {
  const [Place, setPlace] = useState([]);

  const fetchDatas = () => {
    return fetch("http://localhost:5000/get")
      .then((response) => response.json())
      .then((placedata) => setPlace(placedata));
  
  }
  
  useEffect(() => {
  fetchDatas();

  
  }, []);
  const fruits = Place;
  fruits.reverse();
  
  return (
    <div>
      
        <ol reversed>
        {fruits.map(e=> (
          <li>{e}</li>
             ))}
       </ol>
   
    </div>
  )
}

export default UpdateView