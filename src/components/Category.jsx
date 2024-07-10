import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Category() {
  return (
   <>
   <Card style={{ width: '90%' }} className='my-5'>
      <Card.Img variant="top" src="http://1.bp.blogspot.com/-DiSDedfF4qU/TWVxPs0Gi-I/AAAAAAAAArY/sPF0QQiO7Q8/s1600/IMG_1471.JPG" className='p-3 rounded ' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button variant="outline-danger"><FontAwesomeIcon icon={faTrash} /></Button>{' '}
        <Button variant="outline-success"><FontAwesomeIcon icon={faHeart} /></Button>{' '}
    
        </div>
        
      </Card.Body>
    </Card></>
  )
}

export default Category