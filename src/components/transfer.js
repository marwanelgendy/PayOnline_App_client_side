import React from 'react';
import left from '../imgs/transferPage/left.png'
const Transfer = () => {
    return (
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
    );
}

export default Transfer;
