"use client";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const CardSection = () => {
  return (
   <Container className="my-5">
      <Row>
        <Col md={4} className="mb-4 text-center">
          <Card>
           
            <Card.Body style={{height:"300px"}}>
              <Card.Title>Nutrition Plan</Card.Title>
              <Card.Text>
                Personalized Nutrition Diet Plan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 text-center">
          <Card>

            <Card.Body style={{height:"300px"}}>
            <Card.Title>Workout Plan</Card.Title>
              <Card.Text>
                Personalized Workout Plan.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4 text-center">
          <Card>
           
            <Card.Body style={{height:"300px"}}>
            <Card.Title>Follow-up 24/7</Card.Title>
              <Card.Text>
               24/7 Following up via whatsapp personally with Coach Ahmed.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardSection;