import React from 'react'
import RecipeCard from './RecipeCard'
import { Col, Row } from 'react-bootstrap'



function ViewCard() {
  return (
    <>
    <Row className='ms-md-0 w-100'>
    <Col xs={12} md={6} ld={4} xl={3} className='d-flex align-items-center justify-content-center'>

    <RecipeCard/>
    </Col>
    </Row>

    </>


  )
}

export default ViewCard