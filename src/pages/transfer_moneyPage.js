import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import '../App.css';
import '../styles/pages/transfer_moneyPage.css'

const TransferMoneyPage = () => {
    return (
        <Container maxWidth='xl'>
            <div className='transfer-money'>
                <div className="send-balance-container">
                    <div className="send-money">
                        <div className='title'>Send Moeny</div>

                        <div className="send-info">
                            <TextField className='input' label="Username" variant="outlined" />

                            <TextField className='input' label="Amount" variant="outlined" />

                            <Button className='send-btn' variant="contained">Send</Button>
                        </div>
                    </div>
                    <div className="balance">
                        <div className='title'>Your Balance</div>
                        <p className="balance-amount"><span>100</span> $</p>
                        <Button className='recharge-btn' variant="contained">recharge</Button>
                    </div>
                </div>
                <div className='latest-transfer'>
                    <div className="title">Latest Transfers</div>
                </div>
            </div>
        </Container>
    );
}

export default TransferMoneyPage;
