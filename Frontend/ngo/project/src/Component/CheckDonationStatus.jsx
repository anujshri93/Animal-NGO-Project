import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';
import { Header } from './Header';
import { Footer } from './Footer';
import { getDonationStatus } from '../Services/DonationStatusService'; 
import { NavigationBar } from './NavigationBar';
import DonateImage from "../Background6.jpg";

export function DonationStatus() {
  const [name, setName] = useState('');
  const [donationStatus, setDonationStatus] = useState(null);  
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setDonationStatus(null); 

    getDonationStatus(name)
      .then((response) => {
        console.log(response.data);
        if (Object.keys(response.data).length > 0) {
          setDonationStatus(response.data);  
        } else {
          setErrorMessage('No donations received for this name.');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching donation status:', error);
        setErrorMessage(error.response?.data?.message || 'Error fetching donation status');
        setLoading(false);
      });
  };

  return (
    <>
    <NavigationBar/>
    <Container fluid>
      <Header title="Check Your Donation Status" description="Enter your name to see how your donations are being used." />
      
      <div style={{ 
          position: 'relative',
          padding: '200px 0',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
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
          filter: 'blur(5px)', 
          zIndex: -1,
        }}></div>

      <Container>
        <Row className="justify-content-center">
          <Col sm={8} md={6} lg={4}>
            <Form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={handleNameChange} />
              </Form.Group>
              <Button type="submit" variant="primary">Search</Button>
            </Form>
          </Col>
        </Row>
        {loading && <p style={{color: "green", textAlign: 'center'}}>Loading...</p>}
        {errorMessage && <p style={{color: "red", textAlign: 'center'}}>{errorMessage}</p>}
        {donationStatus && (
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Donation Amount</th>
                <th>Cat Food</th>
                <th>Dog Food</th>
                <th>Cow Food</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{donationStatus.name}</td>
                <td>{donationStatus.DonationAmount}</td>  
                <td>{donationStatus.catFood}</td>
                <td>{donationStatus.dogFood}</td>
                <td>{donationStatus.cowFood}</td>
              </tr>
            </tbody>
          </Table>
        )}
        {!donationStatus && !loading && !errorMessage && <p style={{fontWeight:"bolder", color:"yellow", textAlign: 'center'}}>Your Support Makes a World of Difference for Stray Animals</p>}
      </Container>
      </div>
    </Container>
    <Footer />
    </>
  );
}
