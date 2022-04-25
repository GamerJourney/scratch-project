// game rules and card states stored here
import React from 'react';
import CardContainer from './CardContainer.jsx';
import Header from './Header.jsx';
import Styles from '../Styles/Gameboard.css'
import gbImage from '../Assets/Images/Gameboard.png'

function Gameboard() {

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
    //if all cards are front, user wins, and output no. of flips
    //shownCards = [].
    //on user click cards not in shown cards or currGuess, push the card to currGuess
    //currGuess = [card1, card2]. these cards will be shown front
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