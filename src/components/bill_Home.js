import React from 'react';
import {billImages} from '../utilities/imagePaths'
import elec from '../imgs/billPage/electric.png'

const BillHome = ({bill}) => {

    return (
        <div className='bill-item'>
            <div className="bill-img">
                <img src={billImages[bill.category]} alt="elec" />
            </div>
            <div className="bill-info">
                <div className="bill-name">{bill.name}</div>
                <div className="bill-price-status">
                    <div className="bill-price">
                        Price: <span>{bill.price}</span>
                    </div>
                    <div className="bill-status">
                        Status: <span style={bill.status == "Active" ? {color : "#4ee44e  "} :{color : "#d32f2f"}}>{bill.status}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillHome;
