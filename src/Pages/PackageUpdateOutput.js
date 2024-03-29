import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PackageUpdateOutput = () => {
    const [Data, setData] = useState([]);
    const [id, setId] = useState([]);
    const fetchDatas = () => {
      return fetch("http://localhost:5000/data_view")
        .then((response) => response.json())
        .then((data) => setData(data));
    
    }
    
    useEffect(() => {
    fetchDatas();
  
    
    }, []);
    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:5000/package_delete", {
          body: {
            id:id,
          },
        });
        if (response.data === "delete") {
            window.location.reload(false);
          }
    
    };
  return (
    <div className='Package-Output'>
        <div className='AddButton-container'>
            <Link to="/admin/package-add">
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
                    <th>Delete</th>
                </tr>
                {Data.map(e=> (
                <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>{e.district}</td>
                        <td>{e.place}</td>
                        <td>
                        <form onSubmit={handleDelete}><button type="submit" value={e.id} onClick={(e)=> setId(e.target.value)}>Delete</button></form>
                        </td> 
                </tr>
                                    ))}
            </table>
        </div>
    </div>
  )
}

export default PackageUpdateOutput