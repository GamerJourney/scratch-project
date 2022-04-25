//We need CardContainer because the cards need to be presented seperately from the reset numbers etc in the header

import React from 'react'
import Card from './Card'
import Styles from '../Styles/CardContainer.css'
function CardContainer(props) {

    const cardSet = [];
    const cardNum = 16; //this can be a variable defined by user selection
    for (let i = 0; i < cardNum; i++) {
        cardSet.push(<Card />);
    }

    return (
        <div className="CardContainer">

            <div className="Cards">
                {cardSet}
            </div>
        </div>
    )
}

export default CardContainer