// game rules and card states stored here
import React from 'react';
import CardContainer from './CardContainer.jsx';
import Header from './Header.jsx';
import Styles from '../Styles/Gameboard.css'
import gbImage from '../Assets/Images/Gameboard.png'

function Gameboard() {
    return (
        <>
<<<<<<< HEAD
            <div style={{ backgroundImage: `url(${gbImage})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", height: '600px', width: '100%' }} className='Gameboard' >Gameboard
                <Header />
                <CardContainer />
            </div>
=======
        <div className="gameContainer">
            <div>Gameboard</div>
            <Card />
            <Header />
        </div>
>>>>>>> d91de16ff8d379e5da32f96289dfd080915a40f5
        </>
    )
}

export default Gameboard