import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1>Dino Shop</h1>
        </Col>
        <Col md={12}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un correo
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa una contraseña.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
