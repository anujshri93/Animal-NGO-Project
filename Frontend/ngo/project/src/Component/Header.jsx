import React from 'react';
import { Container } from 'react-bootstrap';

export function Header(props) {
    return (
        <Container className="mt-4">
            <div style={{ backgroundColor: 'rgb(251, 212, 56)', padding: '10px', borderRadius: '5px' }}>
                <h5>{props.title}</h5>
            </div>
            <p>{props.description}</p>
        </Container>
    );
}
