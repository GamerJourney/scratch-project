const gameReducer = null;

// import * as types from '../constants/actionTypes.js';

// const initialState = {
//   totalBooks: 2,
//   bookList: [],
//   lastBookId: 2,
// };

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

export default gameReducer;