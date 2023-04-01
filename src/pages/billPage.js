import { Container } from '@mui/system';
import React from 'react';
import elec from '../imgs/billPage/electric.png'
import '../App.css'
import '../styles/pages/billPage.css'
import paid from '../imgs/billPage/paid.png'
import { billImages } from '../utilities/imagePaths'
import { Button } from '@mui/material';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom';
import SuccessfulOperation from '../components/successful_operation';

const BillPage = () => {

    const { billId } = useParams()
    const [bill, setBill] = useState({});
    const [successfulOperationStyle, setSuccessfulOperationStyle] = useState({ top: '-100%' });

    const navigate = useNavigate()
    const alert = useAlert()

    useEffect(() => {

        const id = localStorage.getItem('userId')
        if (id == null) navigate('/')

        axios.get(`https://payonline-be.onrender.com/getBill/${billId}`)
            .then(response => {
                setBill({ ...response.data.bill })
            })

    }, [])

    const closeSuccessComp = () => {
        setSuccessfulOperationStyle({ top: '-100%' })
    }

    const payBill = () => {
        const userId = localStorage.getItem('userId')
        const billId = bill._id
        const amount = parseInt(bill.price)

        console.log("inn")

        axios.post('https://payonline-be.onrender.com/payBill', {
            "userId": userId,
            "billId": billId,
            "amount": amount
        })
            .then(response => {
                setBill({ ...response.data.bill })
                setSuccessfulOperationStyle({ top: '0' })
            })
            .catch(err => {
                alert.show(err.response.data.msg)
            })
    }

    return (
        <div>
            <SuccessfulOperation successStyle={successfulOperationStyle} closeSuccessComp={closeSuccessComp} msg={"Successful payment"} />
            <Container maxWidth='xl'>
                <div className='bill'>
                    {bill.status === 'Closed' && <img src={paid} alt="logo" className='bg-logo' />}
                    <div className='bill-desc'>
                        <div className="bill-img">
                            <img src={billImages[bill.category]} alt="electric" />
                        </div>
                        <div className="bill-info">
                            <p className="bill-name">{bill.name}</p>
                            <div className='bill-data'>
                                <p className="bill-category">
                                    Catergory: <span>{bill.category}</span>
                                </p>
                                <p className="service-provider">
                                    Service Provider: <span>{bill.provider}</span>
                                </p>
                            </div>

                            <div className='separator'></div>

                            <div className="bill-payment">
                                <div className="bill-price">
                                    Price: <span>{bill.price}</span>
                                </div>
                                <div className="bill-status">
                                    Status: <span style={bill.status == "Active" ? { color: "#4ee44e  " } : { color: "#d32f2f" }}>{bill.status}</span>
                                </div>
                            </div>

                            <div className="bill-date">
                                <div className="bill-issued-date">
                                    Isssued Date: <span>{bill.issuedDate}</span>
                                </div>
                                <div className="bill-payment-date">
                                    Payment Date: <span>{bill.deadLineDate}</span>
                                </div>
                            </div>

                            {bill.status === 'Active' && <Button className='pay-btn' variant='contained' onClick={payBill} >Pay</Button>}
                            {bill.status === 'Closed' && <Button className='dis-pay-btn' variant='contained' disabled>Pay</Button>}
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default BillPage;
