import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';


export function NavbarComp() {
  return (
    <Navbar className='bg-dark mb-3' variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="/home">CityTripz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/destinations">Destiniations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}