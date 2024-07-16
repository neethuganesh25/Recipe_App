// src/components/Header.jsx
import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Header({ favoriteCount }) {
  return (
    <Navbar expand="lg" className="bg-body-transparent border-bottom">
      <Container>
        <Navbar.Brand href="#home">
          <div className='d-flex'>
            <img src="src/assets/images/2829ed896dfada68928eff9b4005e31f.png" alt="logo" style={{ width: '100px', height: '100px' }} />
            <h5 className='fs-1 ms-3'>Recipo</h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ width: "100%" }}>
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/mainhome">Recipes</Nav.Link>
            <Nav.Link href="/feedback">Feedback</Nav.Link>
            <Nav.Link href="favorites">
              <Button className='d-flex'>
                Favorites <Badge>{favoriteCount}</Badge>
              </Button>
            </Nav.Link>
            <Nav.Link href="/">
              <Button variant="outline-dark">Logout</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
