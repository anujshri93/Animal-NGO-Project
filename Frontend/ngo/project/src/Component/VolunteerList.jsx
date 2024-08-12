import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Modal, Form, Alert } from 'react-bootstrap';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { fetchVolunteer, deleteVolunteer, updateVolunteer } from '../Services/VolunteerService';

export function VolunteerList() {
    const [volunteers, setVolunteers] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [currentVolunteer, setCurrentVolunteer] = useState(null);
    const [error, setError] = useState(null);

    const getAllVolunteers = async () => {
        try {
            const response = await fetchVolunteer();
            setVolunteers(response.data);
        } catch (err) {
            if (err.message === 'Unauthorized') {
                setError('You are not authorized to view this content. Please log in.');
            } else {
                setError('An error occurred while fetching volunteers.');
            }
        }
    };

    useEffect(() => {
        getAllVolunteers();
    }, []);

    const handleDelete = async (volunteerId) => {
        try {
            await deleteVolunteer(volunteerId);
            setVolunteers(volunteers.filter(vol => vol.ID !== volunteerId));
            setShowDeleteModal(false);
        } catch (err) {
            if (err.message === 'Unauthorized') {
                setError('You are not authorized to delete volunteers.');
            } else {
                setError('An error occurred while deleting the volunteer.');
            }
        }
    };

    const handleUpdate = async () => {
        try {
            await updateVolunteer(currentVolunteer.ID, currentVolunteer);
            getAllVolunteers();
            setShowUpdateModal(false);
        } catch (err) {
            if (err.message === 'Unauthorized') {
                setError('You are not authorized to update volunteers.');
            } else {
                setError('An error occurred while updating the volunteer.');
            }
        }
    };

    const openDeleteModal = (volunteer) => {
        setCurrentVolunteer(volunteer);
        setShowDeleteModal(true);
    };

    const openUpdateModal = (volunteer) => {
        setCurrentVolunteer(volunteer);
        console.log(volunteer);
        setShowUpdateModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentVolunteer({ ...currentVolunteer, [name]: value });
    };

    return (
        <Container>
            <Header title="List of Volunteers" description="Here we can view our Volunteers" />
            <Link to="/admin-dashboard">
                <Button variant="primary" className="mb-3">Back to Dashboard</Button>
            </Link>
            {error && <Alert variant="danger">{error}</Alert>}
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Experience</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {volunteers.map((volunteer) => (
                            <tr key={volunteer.ID}>
                                <td>{volunteer.ID}</td>
                                <td>{volunteer.NAME}</td>
                                <td>{volunteer.EMAIL}</td>
                                <td>{volunteer.PHONE}</td>
                                <td>{volunteer.EXP}</td>
                                <td>
                                    <Button variant="danger" className="me-2" onClick={() => openDeleteModal(volunteer)}>Delete</Button>
                                    <Button variant="success" onClick={() => openUpdateModal(volunteer)}>Update</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            <Footer/>

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete {currentVolunteer?.NAME}?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={() => handleDelete(currentVolunteer.ID)}>Delete</Button>
                </Modal.Footer>
            </Modal>

            {/* Update Modal */}
            <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Volunteer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="NAME" value={currentVolunteer?.NAME || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="EMAIL" value={currentVolunteer?.EMAIL || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" name="PHONE" value={currentVolunteer?.PHONE || ''} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formExp">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control type="text" name="EXP" value={currentVolunteer?.EXP || ''} onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>Cancel</Button>
                    <Button variant="success" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default VolunteerList;
