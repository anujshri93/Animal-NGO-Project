import React, { useEffect, useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { fetchDonations } from '../Services/DonateService';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export function DonerList() {
    const [doners, setDoners] = useState([]);
    const [gridApi, setGridApi] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const getAllDoners = async () => {
        setLoading(true);
        setErrorMessage('');
        try {
            const response = await fetchDonations();
            setDoners(response.data);
            console.log(response.data);
        } catch (error) {
            if (error.message === 'Unauthorized') {
                setErrorMessage('You are not authorized to view this content. Please log in.');
            } else {
                setErrorMessage(error.response?.data?.message || 'Error fetching donation status');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllDoners();
    }, []);

    const onGridReady = (params) => {
        setGridApi(params.api);
    };

    const columnDefs = [
        { headerName: 'ID', field: 'ID' },
        { headerName: 'Name', field: 'Name' },
        { headerName: 'Email', field: 'Email' },
        { headerName: 'Phone', field: 'Phone' },
        { headerName: 'Donated Amount', field: 'DonationAmount', valueFormatter: params => `₹${params.value}` }
    ];

    return (
        <Container>
            <Header title="List of Donors" description="Here we can view our Donors" />
            <Link to="/admin-dashboard">
                <Button variant="primary" className="mb-3">Back to Dashboard</Button>
            </Link>
            {loading && <p style={{ color: 'green' }}>Loading...</p>}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Container className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
                <AgGridReact
                    rowData={doners}
                    columnDefs={columnDefs}
                    onGridReady={onGridReady}
                    pagination={true}
                    paginationPageSize={5}
                />
            </Container>
            <Footer />
        </Container>
    );
}

export default DonerList;
