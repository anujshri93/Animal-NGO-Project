import React, { useState } from 'react';
import { Container, Accordion, Table, Button, Alert, Form, Row, Col } from "react-bootstrap";
import { Header } from "./Header";
import { Footer } from './Footer';
import { NavigationBar } from './NavigationBar';
import AdminImage from "../Background4.webp";

export function AskForHelp() {
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', Query: '' });
    const [resetData, setResetData] = useState(false);

    const handleFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Simulate form submission
        setTimeout(() => {
            setShowAlert(true);
            setResetData(true);
        }, 1000);
    }

    // Reset form data after submission
    if (resetData) {
        setTimeout(() => {
            setFormData({ name: '', email: '', phone: '', Query: '' });
            setResetData(false);
        }, 100);
    }

    return (
        <>
        <NavigationBar/>
        <div style={{ 
          position: 'relative',
          padding: '175px',
          overflow: 'hidden'  // Ensure the child div does not overflow the parent div
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
              filter: 'blur(3px)', // Apply blur effect
              zIndex: -1,
            }}></div>
        <Container>
            <Header title="We are here to help you" description="" />
            <Container>
                {showAlert && <Alert variant="success">We have registered your request. Our representative will get in contact with you as soon as possible.</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3" style={{color:"yellow", fontWeight:"bolder"}}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" value={formData.name} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3" style={{color:"yellow",fontWeight:"bolder"}}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3" style={{color:"yellow", fontWeight:"bolder"}}>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter phone" name="phone" value={formData.phone} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3" style={{color:"yellow", fontWeight:"bolder"}}>
                                <Form.Label>Query</Form.Label>
                                <Form.Control type="text" placeholder="Address your query" name="Query" value={formData.Query} onChange={handleFieldChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Button type="submit" variant="primary">Submit</Button>
                        </Col>
                    </Row>
                </Form>
                {/* FAQ Section */}
                {/* Footer */}
            </Container>
            
        </Container>
        </div>
        <Footer />
        </>
    );
}
