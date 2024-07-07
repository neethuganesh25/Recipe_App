import React from 'react'
import {Container, Nav, Navbar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';



function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-transparent border-bottom">
        <Container>
          <Navbar.Brand href="#home" style={{width: "100%" }}>
            {/* <img className="w-25" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXhlbTl2aTUxeTR6d29tcGo3bGIybDh6eDZlYTEzNHBjN2ZjanhkOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/73trcfdnqJmrftTy7i/giphy.webp" alt="" height={80}
            />
            <img src="https://i.postimg.cc/kXJ4dNp0/images-1-removebg-preview.png" alt="logo" className="w-25" /> */}
            <div className='d-flex'>
            <img src="https://i.pinimg.com/originals/28/29/ed/2829ed896dfada68928eff9b4005e31f.png" alt="no image" style={{width:'100px',heigth:'100px'}} />
            <h5 className='fs-1 ms-3' style={{color:'#003c36',textTransform:'capitalize',fontFamily:'"Arsenal SC", sans-serif;'}}>Recipo</h5>
            </div>
           

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ width: "100%" }}>
            <Nav className="ms-auto d-flex justify-content-center align-items-center">

              <Nav.Link href="">
                <h5  className=" fw-bold  mt-md-2 me-md-5">Home</h5>
              </Nav.Link>
              <Nav.Link href="">
                <h5 className=" fw-bold  mt-md-2 me-md-5">
                  About Us
                </h5>
              </Nav.Link>
              <Nav.Link href="">
                <h5 className=" fw-bold t mt-md-2 me-md-5">

              <Nav.Link href="home">
                <h5  className=" fw-bold  mt-md-2 me-md-2">Home</h5>
              </Nav.Link>
              <Nav.Link href="about">
                <h5 className=" fw-bold  mt-md-2 me-md-2">
                  About Us
                </h5>
              </Nav.Link>
              <Nav.Link href="recipes">
                <h5 className=" fw-bold t mt-md-2 me-md-2">

                  Recipes
                </h5>
              </Nav.Link>
              <Nav.Link href="/">
              <Button variant="outline-dark" style={{}}>Logout</Button>{' '}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}

export default Header