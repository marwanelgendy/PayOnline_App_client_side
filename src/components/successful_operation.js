import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import success from '../imgs/loginPage/successful_registeration.png'
import '../styles/components/successful_operation.css'
const SuccessfulOperation = ({successStyle , closeSuccessComp , msg}) => {
    return (
        <div style={successStyle} className='success-container'>
            <div className='success-box'>
                <HighlightOffIcon onClick={closeSuccessComp} className='close-btn' />
                <div className="success-img">
                    <img src={success} alt="" />
                </div>

                <p className='success-text'>{msg}</p>
            </div>
        </div>
    );
}

export default SuccessfulOperation;
