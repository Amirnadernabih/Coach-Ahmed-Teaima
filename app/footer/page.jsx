// components/Footer.js
"use client";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Some text about the company.</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;