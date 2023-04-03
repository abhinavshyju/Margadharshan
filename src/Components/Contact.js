import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='d-flex contact'>
        <section className='contact-add'>
            <h1> Contact</h1>
            <h3>Margadharshan</h3>
            <h4>Koragad, Thamarassery (PO)</h4>
            <h4>Kozhikode (Dis) - 673573</h4>
            <h4><a  href='mailto:Margadharshan@gmail.com'>Email: margharshan@gmail.com</a></h4>
        </section>
        <section className='contact-social'>
           <a href='instagram'><div className='media-container'><img src='https://cdn-icons-png.flaticon.com/512/87/87390.png' alt=''/><h4>Instagram</h4></div></a> 
           <a href='facebook'><div className='media-container'><img src='https://cdn-icons-png.flaticon.com/512/20/20673.png' alt=''/><h4>Facebook</h4></div></a>
           <a href='linkedin'><div className='media-container'><img src='https://cdn-icons-png.flaticon.com/512/1384/1384014.png' alt=''/><h4>LinkedIn</h4></div></a>
        </section>
    </div>
  )
}

export default Contact