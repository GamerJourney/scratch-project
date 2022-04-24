// game rules and card states stored here
import React from 'react';
import Card from './Card.jsx';
import Header from './Header.jsx';


function Gameboard() {
    return (
        <>
        <div className="gameContainer">
            <div>Gameboard</div>
            <Card />
            <Header />
        </div>
        </>
    )
}

export default Gameboard