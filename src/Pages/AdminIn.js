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
                        <Link to="/admin/update"><h4>Updates</h4></Link> 
                        <Link to="/admin/package"><h4>Package</h4></Link> 
                    </div>
                </div> 
            </div>
            <div className='Left-container'>
                <div className='top-header'>
                <Link to="/home"> <h1>Margadharshan</h1> </Link>
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