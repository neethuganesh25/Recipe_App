import { faBowlFood, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import ViewCard from './ViewCard';
import Category from './Category';




function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
    <div className="row  mt-5 ">
      <div className="col-md-1"></div>
      <div className="col-md-10 ">
        <div className='d-flex mx-1'>
      <h5 className='fs-4' >Add new Recipe Here </h5>
      <Button  variant="light rounded border-none ms-3" style={{marginRight:'30%'}} onClick={handleShow}> <FontAwesomeIcon icon={faUpload}style={{color:'orange'}} beat /></Button>{' '}
     </div> 
     <Modal  show={show} onHide={handleClose}>
      
      <Modal.Header  closeButton>
        <Modal.Title className='text-dark fs-3' >Upload New Recipe <FontAwesomeIcon icon={faBowlFood} beatFade style={{color: "#f51a0a",}} className='ms-2' /></Modal.Title >
      </Modal.Header>
      <Modal.Body className='bg-tranparent'>
      <p className='text-danger fs-5 fw-bold'>Plz Fill the following Details</p>
        <form action="" className='border p-3 rounded border-secondary'>
          <input type="Email" placeholder='Email' className='form-control'  />
          <input type="text" placeholder='Recipe Name' className='form-control mt-3'  />
          <input type="textarea" placeholder='Description' className='form-control mt-3'  />
          <input type="text" placeholder='Ingrediants Example:chilli' className='form-control mt-3'  />
          <input type="text" placeholder='Category' className='form-control mt-3'  />
          <input type="text" placeholder='Recipe Image' className='form-control mt-3'  />
          <input type="text" placeholder='Recipe Video' className='form-control mt-3'  />
        </form>
      </Modal.Body>
      <Modal.Footer>
      
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleClose}>
          Submit Recipe
        </Button>
      </Modal.Footer>
    </Modal>
   <ViewCard/>
    </div>
    
    
    <div className="col-md-1"></div>
</div>


   
     
    </div>
  )
}

export default Add