import React, { useState, useContext } from 'react'; //useState hook for setting state, and useContext hook for avoiding props drilling
import CardContainer from './CardContainer.jsx';
import Header from './Header.jsx';
import Styles from '../Styles/Gameboard.css'
import gbImage from '../Assets/Images/Gameboard.png'
import { ReduceCapacityRounded } from '@mui/icons-material';
import { LoginTicket } from 'google-auth-library';
import { Provider } from 'react-redux';
import Card from './Card.jsx'
// let context = React.createContext(null);

const Gameboard = ( props ) => {
    const { cardSet, flipCard } = props;
    return (
            <div style={{ backgroundImage: `url(${gbImage})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", height: '600px', width: '100%' }} className='Gameboard' >Gameboard
                <Header />
                {
                    cardSet.map(card => 
                        <Card
                            key={card.id}
                            card={card}
                            flipCard={flipCard}
                        />    
                    )
                }
            </div>
        
    )
}

export default Gameboard;