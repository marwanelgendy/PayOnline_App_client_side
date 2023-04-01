import { AccountCircle, LockOpen, PasswordOutlined } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState , useContext , useEffect } from 'react';
import '../App.css'
import '../styles/pages/loginPage.css'
import login from '../imgs/loginPage/register.jpg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert'
import {isLoggedContext} from '../App'

const RegisterPage = () => {
    const [userName, setUserName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [password, SetPassword] = useState("")

    const navigate = useNavigate()
    const alert = useAlert()

    const onChangeUserName = (event) => {
        setUserName(event.target.value)
    }
    const onChangeFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const onChangeSecondName = (event) => {
        setSecondName(event.target.value)
    }

    const onChangePassword = (event) => {
        SetPassword(event.target.value)
    }

    const showAlert = (msg) => {
        alert.show(msg)
    }

    const checkInput = () => {
        if (userName == "" || firstName == "" || secondName == "" || password == "") {
            return false
        }
        return true;
    }

    const register = () => {

        if (checkInput()) {
            axios.post('https://payonline-be.onrender.com/register', {
                username: userName,
                firstname: firstName,
                secondname: secondName,
                password: password
            })
            .then(response => {
                const status = response.data.status
                
                if (status == 'Success') {
                    navigate("/successful-registeration")
                }
            })
            .catch(err => {
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
                            <AccountCircle sx={{ color: '#2192FF', mr: 1, my: 0.5 }} />
                            <TextField
                                id="input-with-sx"
                                className="input-field"
                                label="First Name"
                                variant="standard"
                                value={firstName}
                                onChange={onChangeFirstName}
                            />
                        </Box>
                        <Box className="box">
                            <AccountCircle sx={{ color: '#2192FF', mr: 1, my: 0.5 }} />
                            <TextField
                                id="input-with-sx"
                                className="input-field"
                                label="Second Name"
                                variant="standard"
                                value={secondName}
                                onChange={onChangeSecondName}
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
                        <Button className='login-btn' variant="contained" onClick={register} >Register</Button>
                    </div>
                    <div className="login-img">
                        <img src={login} alt="login" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default RegisterPage;
