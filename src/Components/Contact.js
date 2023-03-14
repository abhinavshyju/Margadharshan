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
        </section>
        <section className='contact-social'>
            <div className='media-container'>instagram</div>
            <div className='media-container'>Facebook</div>
            <div className='media-container'>Linkdin</div>
        </section>
    </div>
  )
}

export default Contact