import { AccountCircle, LockOpen, PasswordOutlined} from '@mui/icons-material';
import { TextField , Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import '../App.css'
import '../styles/pages/loginPage.css'
import login from '../imgs/loginPage/login.jpg'

const LoginPage = () => {

    const [userName , setUserName] = useState("")
    const [password , SetPassword] = useState("")

    const onChangeUserName = (event)=>{
        setUserName(event.target.value)
    }

    const onChangePassword = (event)=>{
        SetPassword(event.target.value)
    }

    return (
        <div className='login'>
            <Container>
                <div className='login-container'>
                    <div className="form">
                        <LockOpen className='icon'/>
                        <Box  className="box">
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
                        <Button className='login-btn' variant="contained">LOGIn</Button>
                    </div>
                    <div className="login-img">
                        <img src={login} alt="login"/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default LoginPage;


