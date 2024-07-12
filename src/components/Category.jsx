import React from 'react'
import ViewCard from './ViewCard'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';





function Category() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
            <Header />
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">

                    <div className='text-center mt-5 w-100 mb-5'>
                        <Button variant='info rounded border-danger ms-3 w-25' onClick={handleShow}><h5 >Add New Category </h5> <FontAwesomeIcon icon={faSquarePlus} shake size="lg" className='ms-4' /> </Button>
                    </div>

                    <div className='mt-2 p-3' >
                        <div className='d-flex mt-4'>
                            <h3 className='mt-3 ms-5'>Indian Foods</h3>
                            <Button variant="outline-primary me-3" style={{ width: '80px', height: '50px' }}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
                        </div>
                        <hr />
                        <div className='mx-5'><ViewCard /></div>
                    </div>

                    <div className='mt-2 p-3' >
                        <div className='d-flex mt-4'>
                            <h3 className='mt-3 ms-5'>Chinese Foods</h3>
                            <Button variant="outline-primary me-3" style={{ width: '80px', height: '50px' }}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
                        </div>
                        <hr />
                        <div className='mx-5'><ViewCard /></div>
                    </div>
                    <div className='mt-2 p-3' >
                        <div className='d-flex mt-4'>
                            <h3 className='mt-3 ms-5'>Chinese Foods</h3>
                            <Button variant="outline-primary me-3" style={{ width: '80px', height: '50px' }}><FontAwesomeIcon icon={faTrash} /></Button>{' '}
                        </div>
                        <hr />
                        <div className='mx-5'><ViewCard /></div>
                    </div>

                </div>
                <div className="col-md-1"></div>
            </div>



            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <form action="">
            <input type="text" placeholder='Category Name' className='form-control' />
          </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary w-25" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary w-25" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
            <Footer />
        </>
    )
}

export default Category