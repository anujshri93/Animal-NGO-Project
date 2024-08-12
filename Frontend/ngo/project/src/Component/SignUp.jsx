import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Header } from './Header';
import { Footer } from './Footer';
import { adminSignup } from '../Services/AdminService';
import { NavigationBar } from './NavigationBar';

export function SignUp() {
  const [AdminData, setAdminData] = useState({ email: '', phone: '', password: '', confirmpassword: '' });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const validate = () => {
    const errors = {};
    if (!AdminData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(AdminData.email)) errors.email = 'Email is invalid';
    if (!AdminData.phone) errors.phone = 'Phone number is required';
    if (!/^\d{10}$/.test(AdminData.phone)) errors.phone = 'Phone number is invalid';
    if (!AdminData.password) errors.password = 'Password is required';
    if (AdminData.password !== AdminData.confirmpassword) errors.confirmpassword = 'Passwords do not match';
    return errors;
  }

  const handleFieldChange = (e) => {
    setAdminData({ ...AdminData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      adminSignup(AdminData).then((response)=>{
        console.log(response.data);
        alert(response.data.message);
        setAdminData({ email: '', phone: '', password: '', confirmpassword: '' });
        setShowAlert(true);
        console.log("Admin registered successfully:", response.data);
      }).catch((error)=>{
        console.log("Error submitting form:", error);
      })
    } else {
      setErrors(validationErrors);
    }
  }

  return (
    <>
    <NavigationBar/>
    <Container>
      <Header title="Welcome to Admin Registration" description="" />
      <Container>
        {showAlert && <Alert variant="success">Admin Registered successfully!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={AdminData.email}
                  onChange={handleFieldChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone Number"
                  name="phone"
                  value={AdminData.phone}
                  onChange={handleFieldChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={AdminData.password}
                  onChange={handleFieldChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="confirmpassword"
                  value={AdminData.confirmpassword}
                  onChange={handleFieldChange}
                  isInvalid={!!errors.confirmpassword}
                />
                <Form.Control.Feedback type="invalid">{errors.confirmpassword}</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Button type="submit" variant="primary">Submit</Button>
            </Col>
          </Row>
        </Form>
        
      </Container>
    </Container>
    <Footer/>
    </>
  );
}
