// game rules and card states stored here
import React, { useState, useContext } from 'react'; //useState hook for setting state, and useContext hook for avoiding props drilling
//https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/

import CardContainer from './CardContainer.jsx';
import Header from './Header.jsx';
import Styles from '../Styles/Gameboard.css'
import gbImage from '../Assets/Images/Gameboard.png'
import { ReduceCapacityRounded } from '@mui/icons-material';
import { LoginTicket } from 'google-auth-library';

let context = React.createContext(null);

function shuffleArray(array) {

    return array.sort(() => Math.random() - 0.5);

}

/*
[
    {
        "_id": 4,
        "vocabobj": "{"question1":"answer1","question2":"answer2"}",
        "publicprivate": "public",
        "topic": "react",
        "createdbyuser": 1
    }
]
*/


let vocabObj = {};

const getData = async () => {
    try {
        const listData = await fetch('http://localhost:3000/vocab/10');
        const list = await JSON.parse(listData);
        console.log(list);

    } catch (err) {
        console.log(err)
    }

}

let qNa = [];
for (const prop in list.vocabObj) {
    let qa = {
        q: `vocabObj.${prop}`,
        a: `${vocabObj[prop]}`
    }
    qNa.push(qa);
}


// fetch('http://localhost:3000/vocab/10')
//     .then(response => response.json())
//     .then(let vocabObj = )
// .then(list => dispatch({ type: types.VOCAB_LIST, payload: list }))




function Gameboard() {



    // A card can be in 1 of 3 cardStatus
    // HIDING - the card is not shown
    // SHOWING - the card is shown but does not have a match yet
    // MATCHING - the card is shown and has a match.
    //            the card should never move from MATCHING to another state during

    const cardStatus = ['HIDING', 'SHOWING', 'MATCHING'];


    const cardSet = [];
    //pass in the questions and answers below
    const fetchedData = fetch()

    const qNa = [
        {
            q: 'Question 1',
            a: 'Answer 1'
        },
        {
            q: 'Question 2',
            a: 'Answer 2'
        }
    ]
    //generating cards when game starts

    for (let i = 0; i < qNa.length; i++) {
        cardSet.push({ id: i, cardStatus: 'HIDING', cardContent: qNa[i].q, qnaSetId: 'qnaSet' + i, noClick: false });
        cardSet.push({ id: qNa.length + i, cardStatus: 'HIDING', cardContent: qNa[i].a, qnaSetId: 'qnaSet' + i, noClick: false })
    }

    const initialState = {
        round: 1,
        guess1: null,
        guess2: null,
        cardSet: [{ id: 0, cardStatus: 'HIDING', cardContent: 'Question 1', qnaSetId: 'qnaSet' + 0, noClick: false },
        { id: 1, cardStatus: 'HIDING', cardContent: 'Answer 1', qnaSetId: 'qnaSet' + 0, noClick: false },
        { id: 2, cardStatus: 'HIDING', cardContent: 'Question 2', qnaSetId: 'qnaSet' + 1, noClick: false },
        { id: 3, cardStatus: 'HIDING', cardContent: 'Answer 2', qnaSetId: 'qnaSet' + 1, noClick: false }
        ]

    }

    //     -> ACTION: FLIP CARD -> Reducer
    // RESET

    // reducer(initialState, action){
    //                 some Logic
    //     return newstate
    // }
    // -> newstate = newState = {
    //     round: 2,
    //     guess1: GUESSED,
    //     guess2: ,
    //     cardSet: [{ id: 0, cardStatus: 'HIDING', cardContent: 'Question 1', qnaSetId: 'qnaSet' + 0, noClick: false },
    //     { id: 1, cardStatus: 'HIDING', cardContent: 'Answer 1', qnaSetId: 'qnaSet' + 0, noClick: false },
    //     { id: 2, cardStatus: 'SHOWING', cardContent: 'Question 2', qnaSetId: 'qnaSet' + 1, noClick: false },
    //     { id: 3, cardStatus: 'HIDING', cardContent: 'Answer 2', qnaSetId: 'qnaSet' + 1, noClick: false }
    //     ]

    //         -> new state = initialState = {
    //             round: 3,
    //             guess1: GUESSED,
    //             guess2: ,
    //             cardSet: [{ id: 0, cardStatus: 'HIDING', cardContent: 'Question 1', qnaSetId: 'qnaSet' + 0, noClick: false },
    //             { id: 1, cardStatus: 'HIDING', cardContent: 'Answer 1', qnaSetId: 'qnaSet' + 0, noClick: false },
    //             { id: 2, cardStatus: 'MATCHING', cardContent: 'Question 2', qnaSetId: 'qnaSet' + 1, noClick: true },
    //             { id: 3, cardStatus: 'MATCHING', cardContent: 'Answer 2', qnaSetId: 'qnaSet' + 1, noClick: true }
    //             ]



    /*logic seudo code:
    
    //on press reset/new game button, reset state

    //on any user action, render all cards with refreshed state

    //if all cards are SHOWING, user wins, and output no. of flips
  
    //on user click cards not in shown cards or currGuess, push the card to currGuess
    //currGuess = [card1, card2]. these cards will be SHOWING 
    //if currGuess = >1, 
        //check if cards are matched. if so push them to shownCards
        //disable user from flipping more cards;
        //set a timer. on timeout reset currGuess to [].
    
    
    
    
    */

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