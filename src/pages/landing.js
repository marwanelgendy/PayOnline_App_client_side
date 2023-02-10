import { Container } from '@mui/system';
import React from 'react';
import landingImg from '../imgs/homePage/home1.jpg'
import payBills from '../imgs/homePage/home3.png'
import money from '../imgs/homePage/home2.png'
import charge from '../imgs/homePage/howToUse1.png'
import select from '../imgs/homePage/howToUse2.png'
import done from '../imgs/homePage/howToUse3.png'
import '../App.css'
import '../styles/pages/landingPage.css'
import { motion } from 'framer-motion';
import { TextField } from '@mui/material';


const Landing = () => {



    return (
        <div>
            <Container maxWidth="xl">

                {/* Landing Section */}
                <div className='landing-sec'>
                    <div className='content'>
                        <motion.p
                            animate={{
                                width: ['0%', '100%']
                            }}
                            transition={{
                                duration: 3,
                                steps: [2,]
                            }}
                            className='main-text'
                        >
                            PAY YOUR BILLS <br /> & <br /> TRANSFER YOUR MONEY
                        </motion.p>

                        <motion.p
                            animate={{
                                width: ['0%', '100%']
                            }}
                            transition={{
                                duration: 3,
                                delay: 2.25,
                                steps: [2,]
                            }}
                            className='secondary-text'
                        >
                            ESAY . FAST . SECUR
                        </motion.p>

                    </div>
                    <div className="landing-img">
                        <motion.div
                            animate={{
                                translateY: [0, 25, 0]
                            }}

                            transition={{
                                duration: 2,
                                repeat: Infinity,

                            }}
                        >
                            <img src={landingImg} alt="landing" />
                        </motion.div>
                    </div>
                </div>
                {/* Landing Section */}
            </Container>

            {/* Service Section */}
            <div className="services">
                <Container maxWidth='xl'>
                    <p className="main-title">Our Services</p>

                    <div className='serv-item'>
                        <div className='serv-content'>
                            <h2 className='serv-title'>TRANSFER MONEY</h2>
                            <p className='serv-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aspernatur possimus assumenda nesciunt hic quas dicta totam ut natus, expedita saepe tempore corporis quo eius blanditiis temporibus autem? In, qui?</p>
                        </div>
                        <div className="serv-img">
                            <img src={money} alt="" />
                        </div>
                    </div>
                    <div className='serv-item reverse'>
                        <div className="serv-img">
                            <img src={payBills} alt="" />
                        </div>
                        <div className='serv-content'>
                            <h2 className='serv-title'>PAY BILLS</h2>
                            <p className='serv-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aspernatur possimus assumenda nesciunt hic quas dicta totam ut natus, expedita saepe tempore corporis quo eius blanditiis temporibus autem? In, qui?</p>
                        </div>
                    </div>
                </Container>
            </div>
            {/* Service Section */}

            {/* How to use */}
            <div className="how-to-use">
                <Container>
                    <p style={{ color: '#2192FF' }} className="main-title">How To Use</p>

                    <div className='htw-container'>
                        <div className="htw-item">
                            <div className="htw-img">
                                <img src={charge} alt="charge" />
                            </div>
                            <p className="htw-desc">Charge Yor Wallet</p>
                        </div>
                        <div className="htw-item">
                            <div className="htw-img">
                                <img src={select} alt="select" />
                            </div>
                            <p className="htw-desc">Select The Service</p>
                        </div>
                        <div className="htw-item">
                            <div className="htw-img">
                                <img src={done} alt="done" />
                            </div>
                            <p className="htw-desc">Finish It Easily</p>
                        </div>
                    </div>
                </Container>
            </div>
            {/* How to use */}

            {/* Contact Us */}
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
            {/* Contact Us */}

            {/* Footer */}
            <Container>
                    <div className="footer">
                        <p className='footer-content'>Made With &hearts; By Marwan Elgendy &copy; 2023</p>
                    </div>
            </Container>
        </div>
    );
}

export default Landing;