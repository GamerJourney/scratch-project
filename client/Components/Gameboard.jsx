// game rules and card states stored here
import React from 'react';
import CardContainer from './CardContainer.jsx';
import Header from './Header.jsx';
import Styles from '../Styles/Gameboard.css'
import gbImage from '../Assets/Images/Gameboard.png'

function Gameboard() {
    return (
        <>
            <div style={{ backgroundImage: `url(${gbImage})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", height: '600px', width: '100%' }} className='Gameboard' >Gameboard
                <Header />
                <CardContainer />
            </div>
        </>
    )
}

export default Gameboard