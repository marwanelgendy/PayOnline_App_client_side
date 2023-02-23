import React from 'react';
import '../styles/components/bill.css'
import elec from '../imgs/billPage/electric.png'
import { Button } from '@mui/material';

const Bill = () => {
    return (
        <div className='bill-component'>
            <div className="bill-img">
                <img src={elec} alt="elec" />
            </div>
            <div className="bill-info">
                <div className="bill-name">Electric Bill</div>
                <div className='bill-details'>
                    <div className="bill-price-status">
                        <div className="bill-price">
                            Price: <span>100$</span>
                        </div>
                        <div className="bill-status">
                            Status: <span>Active</span>
                        </div>
                    </div>
                    <div className="bill-date-category">
                        <div className="bill-category">
                            Category: <span>Electric</span>
                        </div>
                        <div className="bill-date">
                            Issued Date: <span>25-12-2022</span>
                        </div>
                    </div>
                </div>
                <Button variant='contained' className='view-btn'>View</Button>
            </div>
        </div>
    );
}

export default Bill;
