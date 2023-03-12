import { Container } from '@mui/system';
import { TextField } from '@mui/material';
import { useEffect } from 'react';
import React from 'react';
import support from '../imgs/contactusPage/support.jpg'
import '../App.css'
import '../styles/pages/contactusPage.css'

import { useNavigate } from 'react-router-dom';

const ContactUsPage = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        const id = localStorage.getItem('userId')
        if(id == null) navigate('/')
    },[])

    return (

        <div className='contact-us-container'>
            <Container maxWidth='xl' >
                <div className="poster">
                    <div className="poster-desc">
                        <h3 className="poster-title">We provide customer service and technical support throughout the day</h3>
                        <p className='calls-emails'>Calls . Texting . Emails</p>
                    </div>
                    <div className="poster-img">
                        <img src={support} alt="support" />
                    </div>
                </div>
            </Container>
            <div className='contact-us'>
                <Container>
                    <p className="main-title">Contact Us</p>
                    <TextField className="input-field" sx={{
                        fieldset: { borderColor: "white" }
                    }} label="Email" variant="outlined" />
                    <TextField
                        className="input-field" sx={{
                            fieldset: { borderColor: "white" }
                        }} label="Name" variant="outlined" />
                    <TextField
                        className="input-field"
                        sx={{
                            fieldset: { borderColor: "white" }
                        }}
                        label="Phone"
                        variant="outlined" />
                    <TextField
                        className="input-field"
                        label="Message"
                        multiline
                        rows={4}
                        sx={{ fieldset: { borderColor: "white" } }}
                    />
                </Container>
            </div>
        </div>

    );
}

export default ContactUsPage;
