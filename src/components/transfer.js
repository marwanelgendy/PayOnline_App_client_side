import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {transferImages} from '../utilities/imagePaths'
const Transfer = ({transfer}) => {

    const [type , setType] = useState('')
    const [name , setName] = useState('')

    useEffect(()=>{
        const userId = localStorage.getItem('userId')

        if(userId === transfer.sender._id)
        {
            setType("OUT")
            setName(`${transfer.reciever.firstname} ${transfer.reciever.secondname}`)
        }
        else{
            setType("IN")
            setName(`${transfer.sender.firstname} ${transfer.sender.secondname}`)
        }
    },[])

    return (
        <div className='transfer-item'>
            <div className="transfer-img">
                <img src={transferImages[type]} alt="elec" />
            </div>
            <div className="transfer-info">
                <div className="transfer-name">{name}</div>
                <div className="transfer-price">
                    <p>Amount: <span>{transfer.Amount}$</span></p>
                    <p className='transfer-date'>Date: <span>{transfer.date}</span></p>
                </div>
            </div>
        </div>
    );
}

export default Transfer;
