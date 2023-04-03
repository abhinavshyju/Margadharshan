import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Agency_Output = () => {
    const [Data, setData] = useState([]);
    const fetchDatas = () => {
      return fetch("http://localhost:5000/data_view")
        .then((response) => response.json())
        .then((data) => setData(data));
    
    }
    
    useEffect(() => {
    fetchDatas();
  
    
    }, []);
 
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
<div className='Package-Output'>
        <div className='AddButton-container'>
            <Link to="/agency_package/input">
                <button>
                    +Add
                </button>
            </Link>
        </div>
        
        <div className='Package-table'>
            <table>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Package Name
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        District
                    </th>
                    <th>
                        Place
                    </th>
                </tr>
                {Data.map(e=> (
                <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>{e.district}</td>
                        <td>{e.place}</td>
                        
                </tr>
                                    ))}
            </table>
        </div>
    </div>
{/* ------------------------------------------------------------------------ */}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Agency_Output