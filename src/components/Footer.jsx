
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
    <>
    
    <div className="row border-top mt-5" >
      <div className="col-md-1"></div>
      <div className="col-md-4 ">
        
        <h3 className='mt-5' style={{color:'#003c36'}}>RECIPO</h3>

        <p className='mt-3'>Home</p>
        <p>About</p>
        <p>Recipes</p>
        <p>Features</p>
      </div>
      <div className="col-md-5">
        <h4 className='mt-5'style={{color:'#003c36'}}>Contact Us..</h4>
        <div className='d-flex mt-3'>
        <input type="text" className='form-control w-50 bg-transparent border border rounded' placeholder='Email'/>
        
        <button className='btn btn-outline-success text-dark w-25 ms-2'>Subscribe</button></div> 
        <p className=' mt-3 text-dark fs-5'>Follow us on</p>
        <div className="d-flex mt-4 justify-content-between w-50">
          
           <FontAwesomeIcon icon={faInstagram} size='2xl' />
           <FontAwesomeIcon  icon={faFacebook} size='2xl' />
           <FontAwesomeIcon  icon={faTwitter} size='2xl'/>
          
           </div>
          </div>
      <div className="col-md-1"></div> 
      <p className='text-center '>© 2024 Recipo. All Rights Reserved.</p>
    </div>
    
    
    </>
  )
}

export default Footer
