import * as types from './Constants/actionTypes.js'

export const flipCard = (index) => {
  return {type: types.FLIP_CARD, payload:index} 
}

export const resetBoard = () => {
  return {type: types.RESET_BOARD, payload:index}
}