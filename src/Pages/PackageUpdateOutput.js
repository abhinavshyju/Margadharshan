import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PackageUpdateInput from './packageUpdateInput';

const PackageUpdateOutput = () => {
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
  )
}

export default PackageUpdateOutput