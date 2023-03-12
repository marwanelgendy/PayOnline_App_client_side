import React from 'react';
import '../styles/components/bill.css'
import {billImages} from '../utilities/imagePaths'
import { Button } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Bill = ({bill}) => {

    return (
        <div  className='bill-component'>
            <div className="bill-img">
                <img src={billImages[bill.category]} alt="elec" />
            </div>
            <div className="bill-info">
                <div className="bill-name">{bill.name}</div>
                <div className='bill-details'>
                    <div className="bill-price-status">
                        <div className="bill-price">
                            Price: <span>{bill.price}</span>
                        </div>
                        <div className="bill-status">
                            Status: <span style={bill.status == "Active" ? {color : "#4ee44e  "} :{color : "#d32f2f"}}>{bill.status}</span>
                        </div>
                    </div>
                    <div className="bill-date-category">
                        <div className="bill-category">
                            Category: <span>{bill.category}</span>
                        </div>
                        <div className="bill-date">
                            Issued Date: <span>{bill.issuedDate}</span>
                        </div>
                    </div>
                </div>
                <Link to={`/bill/${bill._id}`}><Button variant='contained' className='view-btn'>View</Button></Link>
            </div>
        </div>
    );
}

export default Bill;
