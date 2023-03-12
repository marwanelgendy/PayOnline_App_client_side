import React from 'react';
import '../App.css';
import Recharge from '../components/recharge';
import '../styles/pages/transfer_moneyPage.css'
import { Button, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from 'react-alert'

const TransferMoneyPage = () => {
    const [recharegStyle, setRecharegStyle] = useState({left : '-100%'});
    const [user , setUser] = useState({});
    const [userName , setUserName] = useState('')
    const [amount , setAmount] = useState('')

    const navigate = useNavigate()
    const alert = useAlert()

    useEffect(() => {
        const id = localStorage.getItem('userId')
        if(id == null) navigate('/')

        axios.get(`http://localhost:4300/getUser/${id}`)
        .then(response =>{
            setUser(response.data.user)
        })
    }, []);

    const onChangeAmount = (event) => {
        setAmount(event.target.value)
    }

    const onChangeUserName = (event) => {
        setUserName(event.target.value)
    }

    const openRechargeComp = ()=>{
        setRecharegStyle({left : '0'})
    }

    const updateUserBalance = (amount)=>{
        axios.post(`http://localhost:4300/updateBalance/${user._id}` , {
                "balance" : amount + user.balance
            })
            .then(response =>{

                const newBalance = response.data.user.balance

                setUser({...user , balance : newBalance})

            })
    }

    const rechargeAccount = (amount)=>{
        amount = parseInt(amount)
        console.log(amount)

        if(amount > 5000){
            alert.show("You can't charge you account with amount higher than 5000$")
        }
        else if(amount + user.balance > 20000){
            alert.show("Maximum amount in your account shouldn't be higher than 20000$")
        }
        else if(isNaN(amount)){
            alert.show("Please enter an amount")
        }
        else{
            updateUserBalance(amount)
            setRecharegStyle({left : '-100%'})
        }
    }

    const closeRechargeComp = ()=>{
        setRecharegStyle({left : '-100%'})
    }

    const CheckInput = ()=>{
        if(userName === '') alert.show("Please enter the username")
        else if(amount === '') alert.show("Please enter the amount")
        else if(parseInt(amount) > 10000) alert.show("The amount you will send must be less or equal 10000")
        else if(parseInt(amount) > user.balance) alert.show("Your balance is not enough to send money")
        else{
            return true
        }

        return false
    }

    const sendMoney = ()=>{
        if(!CheckInput()) return

        axios.get('http://localhost:4300/getUserByName' , {params : {username : userName}})
        .then(response =>{
            const recieverId = response.data.user._id
            const oldBalance = response.data.user.balance

            axios.post(`http://localhost:4300/updateBalance/${recieverId}` , {
                "balance" : parseInt(amount) + oldBalance
            })
        })
        .catch(error => {
            alert.show(error.response.data.message)
        })

        updateUserBalance(parseInt(amount)* -1)

    }

    return (
        <div>
            <Recharge rechargeStyle={recharegStyle}  rechargeAccount={rechargeAccount} closeRechargeComp={closeRechargeComp}/>
            <Container maxWidth='xl'>
                <div className='transfer-money'>
                    <div className="send-balance-container">
                        <div className="send-money">
                            <div className='title'>Send Moeny</div>

                            <div className="send-info">
                                <TextField className='input' label="Username" variant="outlined" onChange={onChangeUserName} value={userName} />

                                <TextField className='input' label="Amount" variant="outlined" onChange={onChangeAmount} value={amount} />

                                <Button className='send-btn' variant="contained" onClick={sendMoney}>Send</Button>
                            </div>
                        </div>
                        <div className="balance">
                            <div className='title'>Your Balance</div>
                            <p className="balance-amount"><span>{user.balance}</span> $</p>
                            <Button className='recharge-btn' variant="contained" onClick={openRechargeComp} >recharge</Button>
                        </div>
                    </div>
                    <div className='latest-transfer'>
                        <div className="title">Latest Transfers</div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default TransferMoneyPage;
