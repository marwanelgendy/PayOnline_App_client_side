import React from 'react';
import '../styles/components/recharge.css'
import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Recharge = ({rechargeStyle , rechargeAccount , closeRechargeComp}) => {

    const [amount, setAmount] = useState();

    const onChangeAmount = (event) => {
        setAmount(event.target.value)
    }

    return (
        <div style={rechargeStyle} className='recharge-container'>
            <div className='recharge'>
                <HighlightOffIcon onClick={closeRechargeComp} className='close-btn' />
                <div className="title">
                    Recharge You Account
                </div>

                <TextField
                    id="input-with-sx"
                    className="input-field"
                    label="Amount"
                    variant="standard"
                    onChange={onChangeAmount}
                    value={amount}
                />

                <Button className='recharge-btn' variant="contained" onClick={()=>{
                    rechargeAccount(amount)
                    setAmount('')
                }}>RECHARGE</Button>
            </div>
        </div>
    );
}

export default Recharge;