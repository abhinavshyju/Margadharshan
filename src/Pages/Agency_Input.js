import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Agency_input = () => {

    const naviagte = useNavigate();
    const [Name, SetName] = useState();
    const [district, Setdistrict] = useState();
    const [place, Setplace] = useState();
    const [price, Setprice] = useState();
    const [discription, Setdiscription] = useState();
    const [image, Setimage] = useState();
    
    const handleSignUp = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:5000/data", {
          body: {
            name: Name,
            district: district,
            place: place,
            price: price,
            discription: discription,
            image: image,
          },
          
        });
        if (response.data === "Success  ") {
          naviagte("/agency_package");
        }
        else{
            naviagte("/agency_package");
        }
      };

// District Data start
      const [District, setDistrict] = useState([]);

    const fetchData = () => {
      return fetch("https://script.google.com/macros/s/AKfycbx1ZrDNut7F7lqKxnJHOo1XWSDEHTzdCuBOQ3OyqTGTdf3rtbAROjzfLDpmddE8D9EX/exec")
        .then((response) => response.json())
        .then((Disdata) => setDistrict(Disdata));
  
    }

  useEffect(() => {
    fetchData();

  }, []);
  // 
// Place Data start
      const [Place, setPlace] = useState([]);

      const fetchDatas = () => {
        return fetch("https://script.google.com/macros/s/AKfycbwVlBkemc23x3_nwPykmPgeM-YYjMKPa9oDdHJhfgKeyneEnX2cqncshGOeCUnXMq4p/exec")
          .then((response) => response.json())
          .then((placedata) => setPlace(placedata));
      
      }
      
      useEffect(() => {
      fetchDatas();
    
      
      }, []);
// 
    const Places = []
    Place.map((i)=> {
      if (i.disslug === district){
        Places.push(i)
        
    }
    })
    console.log(place)  
  return (
    <div>
        <div className='Admin'>
            <div className='Side-bar'>
                <div>
                    <Link to="/admin/package"><h1>
                        Admin.
                    </h1>
                    </Link> 
                    <div className='side-menu'>
                        <Link to="/agency_package"><h4>Package Updates</h4></Link> 
                    </div>
                </div> 
            </div>
            <div className='Left-container'>
                <div className='top-header'>
                <Link to="/home"> <h1>Margadharshan</h1> </Link>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'/>
                </div>
                <div className='Update-Container'>
{/* ----------------------------------------------------------------------- */}

<div className='Addupcontainer'>
      <div className='Addupdate'>
        <form onSubmit={handleSignUp}>
            <div className='DisInput d-flex2'>
              <h2>District</h2>
                <select onChange={(e)=> Setdistrict(e.target.value)}>
                      <option value="">Select District</option>
                      {District.map((e)=> (
                      <option value={e.disslug}>{e.disname}</option>
                    ))}
                  </select>
            </div>
            <div className='PlaceInput d-flex2'>
              <h2>Place</h2>
                <select onChange={(e)=> Setplace(e.target.value)}>
                      <option value="">Select Place</option>
                      {Places.map((e)=> (
                      <option value={e.slug}>{e.name}</option>
                    ))}
                </select>
            </div>
        <div className='d-flex2'>
              <h2>Package Name</h2>
              <input 
                type="text"
                value={Name}
                onChange={(e)=> SetName(e.target.value)}
                required
              />
        </div>
        
        <div className='d-flex2'>
              <h2>Price</h2>
                <input 
                type="text"
                value={price}
                onChange={(e)=> Setprice(e.target.value)}
                required
                />
        </div>
        <div className='d-flex2'>
            <h2>Discription</h2>
              <input 
              type="text"
              value={discription}
              onChange={(e)=> Setdiscription(e.target.value)}
              required
              />
        </div>
        <div className='d-flex2'>
          <h2>Cover image</h2>
              <input 
              type="text"
              value={image}
              placeholder="Image url"
              onChange={(e)=> Setimage(e.target.value)}
              required
              />
        </div>
       <div className='UpButton'>
       <button type='submit'>submit</button>
       </div>
        
      </form>
      </div>
    </div>

{/* ------------------------------------------------------------------------ */}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Agency_input