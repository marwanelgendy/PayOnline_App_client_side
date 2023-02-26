import { AccountCircle, LockOpen, PasswordOutlined } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import '../App.css'
import '../styles/pages/loginPage.css'
import login from '../imgs/loginPage/login.jpg'
import { useAlert } from 'react-alert'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const [userName, setUserName] = useState("")
    const [password, SetPassword] = useState("")

    const alert = useAlert()
    const navigate = useNavigate()

    const onChangeUserName = (event) => {
        setUserName(event.target.value)
    }

    const onChangePassword = (event) => {
        SetPassword(event.target.value)
    }

    const showAlert = (msg) => {
        alert.show(msg)
    }

    const checkInput = () => {
        if (userName == "" || password == "") {
            return false
        }
        return true
    }

    const signIn = () => {
        if(checkInput()){
            axios.post('http://localhost:4300/login', {
                username: userName,
                password: password
            })
            .then(response => {
                const status = response.data.status

                if (status == 'Success') {
                    navigate('/home')
                }
            })
            .catch(err =>{
                const msg = err.response.data.message

                showAlert(msg)
            })
        }
        else{
            showAlert("All fields are required")
        }
    }



    return (
        <div className='login'>
            <Container>
                <div className='login-container'>
                    <div className="form">
                        <LockOpen className='icon' />
                        <Box className="box">
                            <AccountCircle sx={{ color: '#2192FF', mr: 1, my: 0.5 }} />
                            <TextField
                                id="input-with-sx"
                                className="input-field"
                                label="Username"
                                variant="standard"
                                value={userName}
                                onChange={onChangeUserName}
                            />
                        </Box>
                        <Box className="box">
                            <PasswordOutlined sx={{ color: '#2192FF', mr: 1, my: 0.5 }} />
                            <TextField
                                id="input-with-sx"
                                className="input-field"
                                label="Password"
                                variant="standard"
                                type='password'
                                onChange={onChangePassword}
                                value={password}
                            />
                        </Box>
                        <Button className='login-btn' onClick={signIn} variant="contained">LOGIn</Button>
                    </div>
                    <div className="login-img">
                        <img src={login} alt="login" />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default LoginPage;


