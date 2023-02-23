import { Container } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import '../App.css';
import '../styles/pages/homePage.css'
import noBills from '../imgs/homePage/bill.png'
import noTransfers from '../imgs/homePage/transfer.png'
import elec from '../imgs/billPage/electric.png'
import left from '../imgs/transferPage/left.png'
import Transfer from '../components/transfer';
import Bill from '../components/bill_Home';

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

                            <Bill />

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

                       <Transfer/>

                    </div>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;
