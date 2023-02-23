import React from 'react';
import elec from '../imgs/billPage/electric.png'
const BillHome = () => {
    return (
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
    );
}

export default BillHome;
