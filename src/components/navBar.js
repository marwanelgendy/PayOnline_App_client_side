import { Button} from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import logo from '../imgs/main_logo.png'
import '../App.css'
import '../styles/navBar.css'
import { AccountCircleTwoTone, MenuOutlined } from '@mui/icons-material';
import { useState } from 'react';

const NavBar = ({ login }) => {

    const [menuStyle, setmenuStyle] = useState({ left : '-100%' });
    const [profileMenuStyle, setprofileMenuStyle] = useState({ display : 'none' });

    let openCloseMenu = ()=>{
        if(menuStyle.left == '-100%')
            setmenuStyle({left : '0'})
        else
            setmenuStyle({left : '-100%' })
    }

    let openCloseProfileMenu = ()=>{
        profileMenuStyle.display == 'none' ? setprofileMenuStyle({display : 'block'})
                                                : setprofileMenuStyle({display : 'none'})
    }

    return (
        <div className='main'>
            <Container maxWidth="xl">
                <div className="header">

                    {login && <MenuOutlined onClick={openCloseMenu} fontSize='large' className='menu-icon'/>}

                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    {!login && <div className='log-reg'>
                        <Button className='btn'>Login</Button>
                        <Button className='btn'>Register</Button>
                    </div>}

                    {login && <div style={menuStyle} className='nav-bar'>
                        <ul className='links'>
                            <li className='list-item'>Home</li>
                            <li className='list-item'>Pay Bills</li>
                            <li className='list-item'>Transfer Money</li>
                            <li className='list-item'>Contact Us</li>
                        </ul>
                    </div>}

                    {login &&
                        <div className='profile'>
                            <AccountCircleTwoTone onClick={openCloseProfileMenu}  fontSize='large' className='profile-icon' />

                            <div style={profileMenuStyle} className='profile-menu'>
                                <p className="profile-menu-item">My Profile</p>
                                <p className="profile-menu-item">Logout</p>
                            </div>
                        </div>
                    }
                </div>
            </Container>
        </div>
    );
}

export default NavBar;