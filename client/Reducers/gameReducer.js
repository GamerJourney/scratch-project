import * as types from '../Constants/actionTypes.js';
import qNa from '../Components/Data'

// const cardStatus = ['HIDING', 'SHOWING', 'MATCHING'];


const cardSet = [];

for (let i = 0; i < qNa.length; i++) {
    cardSet.push({ id: i, cardStatus: 'HIDING', cardContent: qNa[i].q, qnaSetId: 'qnaSet' + i, noClick: false });
    cardSet.push({ id: qNa.length + i, cardStatus: 'HIDING', cardContent: qNa[i].a, qnaSetId: 'qnaSet' + i, noClick: false })
}



const initialState = {
    round: 1,
    guess1: null,
    guess2: null,
    cardSet: cardSet,
    gameWon: false
}

const gameReducer = (state = initialState, action) => {
    let [guess1, guess2, cardSet] = state;

    switch (action.type) {
        case types.FLIP_CARD: {
            //round + 1 on every flipped card
            const round = round + 1;
            const flippedCardId = action.payload; // identify which card was flipped


            //this will happen on guess one
            if (guess1 === null) {
                //mark guess1 to the qnasetid
                guess1 = flippedCardId;

                //find the card in cardSet and update it
                cardSet = cardSet.map(obj => obj.id === flippedCardId ? { ...obj, cardStatus: 'SHOWING' } : obj)

                //return the mutated state
                return {
                    ...state,
                    round,
                    guess1,
                    cardSet
                }
            } else {
                //this will happen when we flip the second card
                //mark guess2 to the qnasetid
                guess2 = flippedCardId
                //compare qnasetid matching with guess1 and guess2
                for (let i = 0; i < cardSet.length; i++) {
                    if (cardSet[i].id === guess1) {
                        setIdOfGuess1 = cardSet[i].qnaSetId
                    } else if (cardSet[i].id === guess2) {
                        setIdOfGuess2 = cardSet[i].qnaSetId
                    }
                }
                if (setIdOfGuess1 !== setIdOfGuess2) {
                    cardSet = cardSet.map(obj => obj.id === guess1 ? { ...obj, cardStatus: 'SHOWING' } : obj);
                    cardSet = cardSet.map(obj => obj.id === guess2 ? { ...obj, cardStatus: 'SHOWING' } : obj);
                    setTimeout(() => {
                        console.log('Not a match, try again!')
                    }, 1000);
                    cardSet = cardSet.map(obj => obj.id === guess1 ? { ...obj, cardStatus: 'HIDING' } : obj);
                    cardSet = cardSet.map(obj => obj.id === guess2 ? { ...obj, cardStatus: 'HIDING' } : obj);

                } else {
                    cardSet = cardSet.map(obj => obj.id === guess1 ? { ...obj, cardStatus: 'MATCHING' } : obj);
                    cardSet = cardSet.map(obj => obj.id === guess2 ? { ...obj, cardStatus: 'MATCHING' } : obj)
                    //define endgame on the last matching
                    if (cardSet.every(card => card.cardStatus === 'MATCHING')) {
                        return {
                            ...state,
                            gameWon: true
                        }

                    }
                }
                setIdOfGuess1 = null;
                setIdOfGuess2 = null;

                return {
                    ...state,
                    round,
                    guess2,
                    cardSet
                }
            }
        };
        case types.RESTART_GAME: return initialState;
        default: {
            return state;
        }
    }

}
export default gameReducer;

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
 
// import * as types from '../constants/actionTypes.js';


// const gameReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.ADD_BOOK: {
//       const newBook = {
//         title: action.payload.title,
//         author: action.payload.author,
//         img_url: action.payload.img_url
//       };

//       let bookList = state.bookList.slice();
//       bookList.push(newBook);

//       const lastBookId = state.lastBookId + 1;
//       const totalBooks = state.totalBooks + 1;
  
//       return {
//         ...state,
//         bookList,
//         lastBookId,
//         totalBooks,
//       };
//     }

//     case types.INITIAL_RENDER: {
//       console.log('in initial render');
//       let bookList = state.bookList.slice();
//       bookList.push(...action.payload);
  
//       return {
//         ...state,
//         bookList,
//       };
//     }

//     case types.DELETE_BOOK: {
//       console.log('in delete book');
//       let bookList = state.bookList.slice();
//       bookList.splice(action.payload, 1);

//       return {
//         ...state,
//         bookList,
//       }
//     }

//     case types.UPDATE_BOOK: {
//       let bookList = state.bookList.slice();
//       bookList[action.payload[1]] = action.payload[0];

//       return {
//         ...state,
//         bookList,
//       }
//     }

//     default: {
//       return state;
//     }
//   }
// };

export default gameReducer
*/