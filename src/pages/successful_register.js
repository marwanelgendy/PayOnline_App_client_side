import { Container } from '@mui/system';
import React from 'react';
import '../App.css'
import '../styles/pages/successful_register.css'
import successfulRegister from '../imgs/loginPage/successful_registeration.png'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SuccessfulRegister = () => {

    const navigate = useNavigate()

    const goToLoginPage = ()=>{
        navigate("/login")
    }
    return (
        <div>
            <Container className='succ-register'>
                <div className="succ-img">
                    <img src={successfulRegister} alt="succ-reg" />
                </div>
                <p className='succ-desc'>Successfully Registered</p>
                <Button className='go-to-btn' onClick={goToLoginPage} variant='contained'>Go To Login Page</Button>
            </Container>
        </div>
    );
}

export default SuccessfulRegister;
