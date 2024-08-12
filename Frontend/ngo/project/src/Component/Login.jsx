import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { SIGN_UP } from '../Constants/AppRoute'; // Move the import statement to the top
import { Footer } from './Footer';

// function CheckExample() {
//     return (
//         <Form>
//             {['checkbox', 'radio'].map((type) => (
//                 <div key={`default-${type}`} className="mb-3">
//                     <Form.Check // prettier-ignore
//                         type={type}
//                         id={`default-${type}`}
//                         label={`default ${type}`}
//                     />

//                     <Form.Check
//                         disabled
//                         type={type}
//                         label={`disabled ${type}`}
//                         id={`disabled-default-${type}`}
//                     />
//                 </div>
//             ))}
//         </Form>
//     );
// }

export function Login() {
    const [donateData, setDonateData] = useState({ email: '',password:'' });      
    const [errors, setErrors] = useState({});
    const [validated, setValidated] = useState(false);

    const handleFieldChange = (e) => {
        setDonateData({ ...donateData, [e.target.name]: e.target.value });
    }

    const validate = () => {
        const errors = {};
        // if (!donateData.name) {
        //     errors.name = 'Name is required';
        // }
        if (!donateData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(donateData.email)) {
            errors.email = 'Email is invalid';
        }
        return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            console.log(donateData);
            setValidated(true);
        } else {
            setErrors(errors);
            setValidated(false);
        }
    }

    return (
        <>
        <Container>
            <Header title="Welcome to Login" description="Login to page" />
            <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {/* <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Name"
                                    name="name"
                                    onChange={handleFieldChange}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
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
                                    onChange={handleFieldChange}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* <Row>
                        <Col lg={4}>
                            <Form>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check // prettier-ignore
                                            type={type}
                                            id={`default-${type}`}
                                            label={`default ${type}`}
                                        />


                                    </div>
                                ))}
                            </Form>
                        </Col>
                    </Row> */}

                    <Row>
                        <Col lg={4}>
                            <Button type="submit" variant="primary">Submit</Button>
                        </Col>
                        <Col lg={4}>
                            <Link to={SIGN_UP}>
                                <Button variant="primary">Sign Up</Button>
                            </Link>
                        </Col>
                    </Row>

                </Form>
                {validated && <Alert variant="success">Login successful!</Alert>}
            </Container>
            
        </Container>
        <Footer />
        </>
        
    );
}

export default Login;
