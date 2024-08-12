import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Header } from "./Header"; // Import the Header component
import { Footer } from "./Footer";
import { Donation } from "../Services/DonateService";
import { DONATION_STATUS } from "../Constants/AppRoute";
import { useNavigate } from 'react-router-dom';
import { NavigationBar } from "./NavigationBar";
import DonateImage from "../background5.jpeg";

export function Donate() {
  const [donateData, setDonateData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    amount: "",
  });

  const [ShowAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleFieldChange = (e) => {
    setDonateData({ ...donateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(donateData);
    Donation(donateData)
      .then((response) => {
        alert(response.data.message);

        // Reset form fields after successful submission
        setDonateData({ name: "", email: "", phone: "", pan: "", amount: "" });

        // Show alert after successful form submission and reset
        setShowAlert(true);
       
        console.log("Form submitted successfully:", response.data);
      })
      .catch((error) => {
        console.log("Error submitting form:", error);
      });
  };

  const handleCheckStatusClick = () => {
    navigate(DONATION_STATUS);  // Navigate to CheckDonations component
  };

  return (
    <>
      <NavigationBar />
      <Container>
        <Header
          title="Welcome to Donate"
          description="Your donation will save a life"
        />
        <div style={{ 
          position: 'relative',
          padding: '175px',
          overflow: 'hidden' // Ensure the child div does not overflow the parent div
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${DonateImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(5px)', // Apply blur effect
            zIndex: -1,
          }}></div>
          <Container>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col lg={4}>
                  <Form.Group className="mb-3" style={{fontWeight:"bolder", color:"yellow"}}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name="name"
                      value={donateData.name}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="mb-3" style={{fontWeight:"bolder", color:"yellow"}}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={donateData.email}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Group className="mb-3" style={{fontWeight:"bolder", color:"yellow"}}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Phone No"
                      name="phone"
                      value={donateData.phone}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
                <Col lg={4}>
                  <Form.Group className="mb-3" style={{fontWeight:"bolder", color:"yellow"}}>
                    <Form.Label>PAN</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter PAN No"
                      name="pan"
                      value={donateData.pan}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Form.Group className="mb-3" style={{fontWeight:"bolder", color:"yellow"}}>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Amount"
                      name="amount"
                      value={donateData.amount}
                      onChange={handleFieldChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <Button type="submit" variant="primary">
                    Pay
                  </Button>
                  <Button type="button" variant="success" style={{ position:"relative", bottom:"37px", left:"80px"}} onClick={handleCheckStatusClick}>
                    Check Donation Status
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
