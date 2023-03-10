import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import logo from '../imgs/main_logo.png'
import '../App.css'
import '../styles/components/navBar.css'
import { AccountCircleTwoTone, MenuOutlined } from '@mui/icons-material';
import { useState , useContext , useEffect } from 'react';
import { Link } from 'react-router-dom';

import {isLoggedContext} from '../App'
import { useNavigate } from 'react-router-dom';

const NavBar = ({setLogIn}) => {

    const isLogged =  useContext(isLoggedContext);
    
    const [userId , setUserId] = useState(null)
    const [menuStyle, setmenuStyle] = useState({ left: '-100%' });
    const [profileMenuStyle, setprofileMenuStyle] = useState({ display: 'none' });

    const navigate = useNavigate()

    useEffect(() => {
        
        const id = localStorage.getItem('userId')
        setUserId(id)
    }, [isLogged]);

    const openCloseMenu = () => {
        if (menuStyle.left == '-100%')
            setmenuStyle({ left: '0' })
        else
            setmenuStyle({ left: '-100%' })
    }

    const openCloseProfileMenu = () => {
        profileMenuStyle.display == 'none' ? setprofileMenuStyle({ display: 'block' })
            : setprofileMenuStyle({ display: 'none' })
    }

    const logout = ()=>{
        localStorage.clear('userId')
        setLogIn(false)
        setprofileMenuStyle({ display: 'none' })
        navigate("/")
    }

    return (
        <div className='main'>
            <Container maxWidth="xl">
                <div className="header">

                    {userId != null && <MenuOutlined onClick={openCloseMenu} fontSize='large' className='menu-icon' />}

                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    {userId == null && <div className='log-reg'>
                        <Button className='btn'>
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button className='btn'>
                            <Link to="/register">Register</Link>
                        </Button>
                    </div>}

                    {userId != null && <div style={menuStyle} className='nav-bar'>
                        <ul className='links'>
                            <li className='list-item'>
                                <Link to="/home" >Home</Link>
                            </li>
                            <li className='list-item'><Link to="/paybills" >Pay Bills</Link></li>
                            <li className='list-item'><Link to={"/transferMoney"}>Transfer Money</Link></li>
                            <li className='list-item'><Link to={"/contactUs"}>Contact Us</Link></li>
                        </ul>
                    </div>}

                    {userId != null &&
                        <div className='profile'>
                            <AccountCircleTwoTone onClick={openCloseProfileMenu} fontSize='large' className='profile-icon' />

                            <div style={profileMenuStyle} className='profile-menu'>
                                <p className="profile-menu-item">My Profile</p>
                                <p onClick={logout} className="profile-menu-item">Logout</p>
                            </div>
                        </div>
                    }
                </div>
            </Container>
        </div>
    );
}

export default NavBar;