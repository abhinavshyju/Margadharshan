import React from 'react'
import { Link } from 'react-router-dom'
import PackageUpdateInput from './packageUpdateInput'
import PackageUpdateOutput from './PackageUpdateOutput'

const AdminIn = () => {
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
                        <h4>Updates</h4>
                        <h4>Package Update</h4>
                    </div>
                </div> 
            </div>
            <div className='Left-container'>
                <div className='top-header'>
                <h1>Margadhardhan</h1>
                <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'/>
                </div>
                <div className='Update-Container'>
                    <PackageUpdateInput/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AdminIn