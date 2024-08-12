import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import { AdminNavBar } from './AdminNavbar';
import Dashboard from '../Adminlogin2.webp';
import '../AdminDashboard.css'; // Make sure to create and import this CSS file

export function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <>
            <AdminNavBar/>
            <div className="admin-dashboard">
                <Container className="dashboard-container">
                    <Header title="Admin Dashboard" description="Manage your content here" />
                    <Row className="mt-5">
                        <Col className="d-flex justify-content-center mb-3">
                            <Button variant="primary" size="lg" onClick={() => navigate('/Doner-List')}>Doner List</Button>
                        </Col>
                        <Col className="d-flex justify-content-center mb-3">
                            <Button variant="primary" size="lg" onClick={() => navigate('/Volunteer-List')}>Volunteer List</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default AdminDashboard;