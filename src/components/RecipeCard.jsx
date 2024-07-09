import { faHeart, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';




function RecipeCard() {

  const [lgShow, setLgShow] = useState(false);
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '90%' }} className='my-5'>
      <Card.Img variant="top" onClick={setLgShow} src="http://1.bp.blogspot.com/-DiSDedfF4qU/TWVxPs0Gi-I/AAAAAAAAArY/sPF0QQiO7Q8/s1600/IMG_1471.JPG" className='p-3 rounded ' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button variant="outline-primary me-3 w-25"><FontAwesomeIcon icon={faTrash} /></Button>{' '}
        <Button variant="outline-info me-3 w-25"><FontAwesomeIcon icon={faPenToSquare}  /></Button>
        <Button variant="outline-success w-25"><FontAwesomeIcon icon={faHeart} /></Button>{' '}
    
        </div>
        
      </Card.Body>
    </Card>

    <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Spiced,Deep-fried-Chicken-65
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <img src="http://1.bp.blogspot.com/-DiSDedfF4qU/TWVxPs0Gi-I/AAAAAAAAArY/sPF0QQiO7Q8/s1600/IMG_1471.JPG" alt="no image"  height={'300px'} width={'100%'} />
            </div>
            <div className="col-md-6">
              <h4>Cooking Instructions</h4>
              <p className='p-2' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum itaque quibusdam animi eveniet? Velit accusantium illum assumenda. Vel natus in officiis cum corporis. Explicabo ex fugit temporibus inventore fuga?
                <h6 className='mt-3'> Video Link:</h6>
              </p>
              <h6>Ingrediants:</h6>
              <p>
              1)ffsfs
              2)sfsfs
              3)kj

              </p>

            </div>
          </div>
        </Modal.Body>
      </Modal>

    

    </>
  )
}

export default RecipeCard