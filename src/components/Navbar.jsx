import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarTop() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand style={{fontSize:"40px"}}>Employee Management System</Navbar.Brand>
      </Container>
    </Navbar>
  </>
  )
}

export default NavbarTop;