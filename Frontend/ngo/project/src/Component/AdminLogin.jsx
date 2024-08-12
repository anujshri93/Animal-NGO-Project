import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";
import { ADMIN_DASHBOARD } from "../Constants/AppRoute";
import { Footer } from "./Footer";
import { adminlogin, storeToken } from "../Services/AdminService";
import AdminImage from "../Background1.jpg"; 

export function AdminLogin() {
  const [Credentials, setCredentials] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [Loginerror, setLoginerror] = useState("");
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleFieldChange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!Credentials.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(Credentials.email)) {
      errors.email = "Email is invalid";
    }
    if (!Credentials.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await adminlogin(Credentials);
        if (response.status === 200) {
          storeToken(response.data.token);
          localStorage.setItem('authToken', response.data.token); // Store token in local storage
          navigate(ADMIN_DASHBOARD);
        }
        setValidated(true);
        setLoginerror("");
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setLoginerror(error.response.data.message);
        }
      }
    } else {
      setValidated(false);
    }
  };

  return (
    <>
      <Header style={{ innerWidth: "100%" }} title="Welcome to AdminLogin" description="" />
      <Container className="mt-6">
        <div style={{ 
          position: 'relative',
          padding: '175px',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${AdminImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)',
            zIndex: -1,
          }}></div>
          <Row className="justify-content-center">
            <Col lg={6} style={{ paddingTop: "20px" }}>
              <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "bolder", color: "yellow" }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      onChange={handleFieldChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "bolder", color: "yellow" }}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      onChange={handleFieldChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Row className="mb-3">
                    <Col>
                      <Button type="submit" variant="primary" className="me-2">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
                {validated && !Loginerror && (
                  <Alert variant="success">Login successful!</Alert>
                )}
                {Loginerror && (
                  <Row className="mt-3">
                    <Col>
                      <Alert variant="danger">{Loginerror}</Alert>
                    </Col>
                  </Row>
                )}
              </Container>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default AdminLogin;
