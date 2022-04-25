// game rules and card states stored here
import React, { useState, useContext } from 'react'; //useState hook for setting state, and useContext hook for avoiding props drilling
//https://www.geeksforgeeks.org/what-is-prop-drilling-and-how-to-avoid-it/

import CardContainer from './CardContainer.jsx';
import Header from './Header.jsx';
import Styles from '../Styles/Gameboard.css'
import gbImage from '../Assets/Images/Gameboard.png'

let context = React.createContext(null);

function shuffleArray(array) {

    return array.sort(() => Math.random() - 0.5);

}

function Gameboard() {
    const [fName, setfName] = useState("firstName");
    const [lName, setlName] = useState("LastName");
    const initialState = {


    }
    /**
     * VocabSet data example
     * {
     * Set 1: {
     *          id: 1,
     *          publicprivate: ,
     *          createdbyuser: ,
     *          topic: js,
     *          QnA: {
     *                  qna1  {  q: xxx,
     *                          a: xxx,
     *                          qnaid: 001
     *                        },
     *                   qna2 {  q: xxx,
     *                          a: xxx,
     *                          qnaid: 002
     *                        },
     *                
     *                      },
     *           
     *              },
     *          }

     */



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
            <div id="Gameboard">Gameboard
                <Header />
                <CardContainer />
            </div>
        </>
    )
}

export default Gameboard