import { Container } from '@mui/system';
import React from 'react';
import elec from '../imgs/billPage/electric.png'
import '../App.css'
import '../styles/pages/billPage.css'
import paid from '../imgs/billPage/paid.png'
import {billImages} from '../utilities/imagePaths'
import { Button } from '@mui/material';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const BillPage = () => {

    const {billId} = useParams()
    const [bill, setBill] = useState({});

    const navigate = useNavigate()

    useEffect(()=>{

        const id = localStorage.getItem('userId')
        if(id == null) navigate('/')
    
        axios.get(`http://localhost:4300/getBill/${billId}`)
        .then(response =>{
            setBill({...response.data.bill})
        })
       
    } , [])

    return (
        <Container maxWidth='xl'>
            <div className='bill'>
                {bill.status === 'Closed' && <img src={paid} alt="logo" className='bg-logo'/>}
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
                                Status: <span style={bill.status == "Active" ? {color : "#4ee44e  "} :{color : "#d32f2f"}}>{bill.status}</span>
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
                        
                        {bill.status === 'Active' && <Button className='pay-btn' variant='contained'>Pay</Button>}
                        {bill.status === 'Closed' && <Button className='dis-pay-btn' variant='contained' disabled>Pay</Button>}
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default BillPage;
