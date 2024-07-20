import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const PasswordReset = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1>Reset Password</h1>
        </Col>
        <Col md={12}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Reset Token
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordReset;
