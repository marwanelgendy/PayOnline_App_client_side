import { Container } from '@mui/system';
import React from 'react';
import elec from '../imgs/billPage/electric.png'
import '../App.css'
import '../styles/pages/billPage.css'
import { Button } from '@mui/material';

const BillPage = () => {
    return (
        <Container maxWidth='xl'>
            <div className='bill'>
                <div className='bill-desc'>
                    <div className="bill-img">
                        <img src={elec} alt="electric" />
                    </div>
                    <div className="bill-info">
                        <p className="bill-name">Electric Bill</p>
                        <div className='bill-data'>
                            <p className="bill-category">
                                Catergory: <span>Electric</span>
                            </p>
                            <p className="service-provider">
                                Service Provider: <span>Electric Company</span>
                            </p>
                        </div>

                        <div className='separator'></div>
                     
                        <div className="bill-payment">
                            <div className="bill-price">
                                Price: <span>100$</span>
                            </div>
                            <div className="bill-status">
                                Status: <span>Active</span>
                            </div>
                        </div>

                        <div className="bill-date">
                            <div className="bill-issued-date">
                                Isssued Date: <span>15/3/2023</span>
                            </div>
                            <div className="bill-payment-date">
                                Payment Date: <span>15/4/2023</span>
                            </div>
                        </div>
                        
                        <Button className='pay-btn' variant='contained'>Pay</Button>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default BillPage;
