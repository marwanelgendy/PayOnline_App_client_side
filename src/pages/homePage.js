import { Container } from '@mui/system';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../styles/pages/homePage.css'
import noBills from '../imgs/homePage/bill.png'
import noTransfers from '../imgs/homePage/transfer.png'
import elec from '../imgs/billPage/electric.png'
import left from '../imgs/transferPage/left.png'
import Transfer from '../components/transfer';
import Bill from '../components/bill_Home';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Recharge from '../components/recharge';

const HomePage = () => {
    const [bills, setBills] = useState([]);
    const [transfers, setTransfers] = useState([]);

    const navigate = useNavigate()
    useEffect(() => {
        const id = localStorage.getItem('userId')
        if(id == null) navigate('/')

        const userId = localStorage.getItem('userId')
        axios.get(`http://localhost:4300/getUser/${userId}`)
        .then(response => {
            setBills(response.data.user.bills)
        })

        axios.get('http://localhost:4300/getTransfers' , {params : {id : userId}})
        .then(response => {
            setTransfers(response.data.transfer.reverse())
        })

    }, []);

    return (
       
        <Container maxWidth='xl'>
            <div className='home'>
                <div className="bills">
                    <div className="sec-title">Bills</div>
                    <div className="bills-container">
                        {bills.length == 0 &&

                            <div className='no-bills'>
                                <img src={noBills} alt="No Bills" />
                            </div>
                        }

                        {bills.length > 0 &&

                            bills.map((bill,index) =>(
                                <Link to={`/bill/${bill._id}`} key={index}>
                                    <Bill  bill={bill}/>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="transfers">
                    <div className="sec-title">Transfers</div>
                    <div className="transfers-container">
                         {transfers.length == 0 &&

                            <div className='no-transfers'>
                                <img src={noTransfers} alt="No Transfers" />
                            </div>
                        }

                        {transfers.length > 0 &&

                            transfers.map((transfer,index) => (
                                <Transfer key={index} transfer={transfer} />
                            ))

                        }

                    </div>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;
