import { Container } from '@mui/system';
import React from 'react';
import Bill from '../components/bill';
import '../styles/pages/billsPage.css'

const BillsPage = () => {
    return (
        <Container maxWidth ='xl'>
            <div className='bills-page'>
                <Bill />
            </div>
        </Container>
    );
}

export default BillsPage;
