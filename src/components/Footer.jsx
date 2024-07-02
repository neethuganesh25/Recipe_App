import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
    <>
    <div className="row ">
      <div className="col-md-1"></div>
      <div className="col-md-4">
        <h3 className='text-success mt-5'>RECIPO</h3>

        <p>Home</p>
        <p>About</p>
      </div>
      <div className="col-md-5">
        <h4 className='mt-5 text-success'>Contact Us..</h4>
        <div className='d-flex mt-3'>
        <input type="text" className='form-control w-50 bg-transparent border border rounded' placeholder='Email'/>
        
        <button className='btn btn-outline-success text-dark w-25 ms-2'>Subscribe</button></div> 
        <div className="d-flex mt-4 justify-content-between w-50">
           <FontAwesomeIcon icon={faInstagram} size='2xl' />
           <FontAwesomeIcon  icon={faFacebook} size='2xl' />
           <FontAwesomeIcon  icon={faTwitter} size='2xl'/>
          
           </div>
          </div>
      <div className="col-md-1"></div> 
    </div>
    
    
    </>
  )
}

export default Footer