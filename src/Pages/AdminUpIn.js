import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AdminUpIn = () => {
    const [data, setUpdate] = useState("");
    const handleSignUp = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:5000/update", {
          body: {
            data: data,
          },
        });
      };
    const [Data, setData] = useState([]);

    const fetchDatas = () => {
      return fetch("http://localhost:5000/data_update")
        .then((response) => response.json())
        .then((data) => setData(data));
    
    }
    
    useEffect   (() => {
    fetchDatas();
  
    
    }, []);
    console.log(Data)
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
                        <Link to="/admin/update"><h4>Updates</h4></Link> 
                        <Link to="/admin/package"><h4>Package Update</h4></Link> 
                    </div>
                </div> 
            </div>
            <div className='Left-container'>
                <div className='top-header'>
                <Link to="/home"> <h1>Margadhardhan</h1> </Link>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'/>
                </div>
                <div className='Update-Container'>

        
                        <div className='Addupcontainer'>
                            <div className='Addupdate'>
                                <form onSubmit={handleSignUp}>
                                    <div className='d-flex2'>
                                                <h2>Package Name</h2>
                                                <input 
                                                    type="text"
                                                    value={data}
                                                    onChange={(e)=> setUpdate(e.target.value)}
                                                    required
                                                />
                                    </div>
                                    <div className='UpButton'>
                                        <button type='submit'>submit</button>
                                    </div>
                                </form>
                                <div className='Package-table'>
                                    <table>
                                        <tr>
                                                <th>
                                                    Id
                                                </th>
                                                <th>
                                                Updates
                                                </th>
                                        </tr>
                                            {Data.map(e => (
                                        <tr>
                                                    <td>{e.id}</td>
                                                    <td>{e.update}</td>
                                        </tr>
                                                            ))}
                                    </table>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default AdminUpIn