//two buttons 
//Discover sets
//Create your own

import React from 'react';
import Button from '@mui/material/Button';
import styles from '../Styles/Sidebar.css';

function Sidebar() {
    return (
        <div id="Sidebar">
            <Button className="sbButton" id="discover" variant="contained">Discover Sets</Button>
            <Button className="sbButton" id="create" variant="contained">Create Your Own</Button>
        </div>
    )
}

export default Sidebar;