//We need CardContainer because the cards need to be presented seperately from the reset numbers etc in the header
import React from 'react'
import Card from './Card'
import Styles from '../Styles/CardContainer.css'

function CardContainer(props) {



    return (
        <div className="CardContainer">
            <div className="Cards">
                {cardSet}
            </div>
        </div>
    )
}

export default CardContainer