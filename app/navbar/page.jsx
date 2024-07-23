"use client";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <Navbar bg="black" variant="dark">
      <Container className="justify-content-center">
        <Navbar.Brand href="/header">
          <img
            src="/logo.jpg" 
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
