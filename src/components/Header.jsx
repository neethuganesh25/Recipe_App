import React from 'react'
import { Button, Container,  Nav,  Navbar } from 'react-bootstrap'


function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-transparent">
          <Container>
            <Navbar.Brand href="#home" style={{ width: "70%" }}>
            <img className="w-25" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXhlbTl2aTUxeTR6d29tcGo3bGIybDh6eDZlYTEzNHBjN2ZjanhkOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/73trcfdnqJmrftTy7i/giphy.webp" alt="" height={80}
           />
              <img src="https://i.postimg.cc/kXJ4dNp0/images-1-removebg-preview.png" alt="logo" className="w-25" />
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{ width: "50%" }}>
              <Nav className="ms-auto d-flex justify-content-center align-items-center">
                <Nav.Link href="">
                  <h5 className=" fw-bold  mt-md-2 me-md-2">HOME</h5>
                </Nav.Link>
                <Nav.Link href="">
                  <h5 className=" fw-bold  mt-md-2 me-md-2">
                    ABOUT US
                  </h5>
                </Nav.Link>
                <Nav.Link href="">
                  <h5 className=" fw-bold t mt-md-2 me-md-2">
                    RECIPES
                  </h5>
                </Nav.Link>
                <Nav.Link href="#login">
                  {" "}
                  <Button
                    
                    className="fw-bold btn btn-success"
                  >
                   LOGIN
                  </Button>{" "}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  )
}

export default Header