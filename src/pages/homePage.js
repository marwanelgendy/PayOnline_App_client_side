import { Container } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import '../App.css';
import '../styles/pages/homePage.css'
import noBills from '../imgs/homePage/bill.png'
import noTransfers from '../imgs/homePage/transfer.png'
import elec from '../imgs/billPage/electric.png'
import left from '../imgs/transferPage/left.png'

const HomePage = () => {
    const [bills, setBills] = useState([]);
    const [transfers, setTransfers] = useState([]);

    return (
        <Container maxWidth='xl'>
            <div className='home'>
                <div className="bills">
                    <div className="sec-title">Bills</div>
                    <div className="bills-container">
                        {/* {bills.length == 0 && 
                        
                            <div className='no-bills'>
                                <img src={noBills} alt="No Bills" />
                            </div>
                        } */}

                        {bills.length == 0 &&

                            <div className='bill-item'>
                                <div className="bill-img">
                                    <img src={elec} alt="elec" />
                                </div>
                                <div className="bill-info">
                                    <div className="bill-name">Electric Bill</div>
                                    <div className="bill-price-status">
                                        <div className="bill-price">
                                            Price: <span>100$</span>
                                        </div>
                                        <div className="bill-status">
                                            Status: <span>Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        }
                    </div>
                </div>
                <div className="transfers">
                    <div className="sec-title">Transfers</div>
                    <div className="transfers-container">
                        {/* {transfers.length == 0 && 
                            
                            <div className='no-transfers'>
                                <img src={noTransfers} alt="No Transfers" />
                            </div>
                        } */}

                        <div className='transfer-item'>
                            <div className="transfer-img">
                                <img src={left} alt="elec" />
                            </div>
                            <div className="transfer-info">
                                <div className="transfer-name">Electric Bill</div>
                                <div className="transfer-price">
                                    Amount: <span>100$</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;
