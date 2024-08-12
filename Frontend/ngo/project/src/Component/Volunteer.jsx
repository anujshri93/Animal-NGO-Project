import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { addVolunteer } from "../Services/VolunteerService";
import { NavigationBar } from "./NavigationBar";
import AdminImage from "../Background2.jpg";

export function Volunteer() {
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleFieldChange = (e) => {
    setVolunteerData({ ...volunteerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addVolunteer(volunteerData)
      .then((response) => {
        alert(response.data.message);

        setVolunteerData({ name: "", email: "", phone: "", experience: "" });

        setShowAlert(true);

        console.log("Form submitted successfully:", response.data);
      })
      .catch((error) => {
        console.log("Error submitting form:", error);
      });
  };

  return (
    <>
      <NavigationBar />
      <Container>
        <Header
          title="Welcome to Volunteer Registration"
          description="Fill info here!"
        />

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
            filter: 'blur(5px)', 
            zIndex: -1,
          }}></div>
          <Container>
            {showAlert && (
              <Alert variant="success">Volunteer registered successfully!</Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col lg={4}>
                  <Form.Group className="mb-3" style={{ color: "yellow" }}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={volunteerData.name}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Group className="mb-3" style={{ color: "yellow" }}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={volunteerData.email}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Group className="mb-3" style={{ color: "yellow" }}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter phone"
                      name="phone"
                      value={volunteerData.phone}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Group className="mb-3" style={{ color: "yellow" }}>
                    <Form.Label>Experience in animal rescue?</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Yes or No"
                      name="experience"
                      value={volunteerData.experience}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      </Container>
      <Footer />
    </>
  );
}
