//either flip back, or flip front

import React from 'react';

const Card = (props) => {
    const { card, flipcard } = props;

    if (card.cardStatus === 'SHOWING' || 'MATCHING') {
        const cardClass = "flip-front";
    } else {
        const cardClass = "flip-back";
    }

    // how to render something different based on the cardClass?
    return (
        <li className="flip-container">
            <div className={cardClass}>
                <div onClick={() => flipCard(card.id)}></div>
                {/* <div className="flip-back"><img src="../Assets/Images/card_back.png" alt="" /></div> */}
            </div>
        </li>
    )
}

export default Card;

/*
    id: qNa.length + i,
    cardStatus: 'Hiding',/'Showing'/'Matching'
    cardContent: qNa[i].a,
    qnaSetId: 'qnaSet' + i,
    noClick: false,
*/

// let cardClass = classNames({
//     'noClick': true,

// })