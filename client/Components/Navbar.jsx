//Login, sign up, logo
import React from 'react';
import Button from '@mui/material/Button';
import styles from '../Styles/Navbar.css';
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Navbar(props) {
    //#D2FDFF
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <nav className="NavbarItems">
            <Button className='navButton' variant="outlined" id="signup" onClick={() => setSignupModal(1)}>Sign Up</Button>
            <img src='../Assets/Images/logo_banner.png' width='200' height='50'></img>
            <Button className='navButton' variant="outlined" id="Login" onClick={() => handleOpen(true)}>Login</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="outer-modal"
            >
                <div className="inner-modal">
                    <Login />
                </div>
            </Modal>
        </nav>
    )
};



export default Navbar;