import { faBowlFood, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <div className='d-flex mx-5'>
      <h5 className='fs-5 w-25'>Add new Recipe Here</h5>
      <Button variant="light rounded border-danger ms-2" style={{width:'7%' ,height:'40px'}} onClick={handleShow}> <FontAwesomeIcon icon={faUpload} beat /></Button>{' '}
    </div>


    <Modal  show={show} onHide={handleClose} size='lg'>
      
        <Modal.Header  closeButton>
          <Modal.Title className='text-dark fs-3' >Upload New Recipe <FontAwesomeIcon icon={faBowlFood} beatFade style={{color: "#f51a0a",}} className='' /></Modal.Title >
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
        
          <Button variant="secondary w-25" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success w-25" onClick={handleClose}>
            Submit Recipe
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add