import React from 'react';
import {transferImages} from '../utilities/imagePaths'
const Transfer = ({transfer}) => {
    return (
        <div className='transfer-item'>
            <div className="transfer-img">
                <img src={transferImages[transfer.type]} alt="elec" />
            </div>
            <div className="transfer-info">
                <div className="transfer-name">{transfer.name}</div>
                <div className="transfer-price">
                    Amount: <span>{transfer.Amount}</span>
                </div>
            </div>
        </div>
    );
}

export default Transfer;
