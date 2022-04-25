//Login, sign up, logo
import React from 'react';
import Button from '@mui/material/Button';
import styles from '../Styles/Navbar.css';

function Navbar(props) {
    //#D2FDFF

    return (

        <nav id="NavbarItems">
            <Button className='navButton' variant="outlined" id="signup">Sign Up</Button>
            <img src='../Assets/Images/logo_banner.png' width='200' height='50'></img>
            <Button className='navButton' variant="outlined" id="Login">Login</Button>
        </nav>
    )

};

export default Navbar;