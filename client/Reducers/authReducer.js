const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

const initialState = {
  isSignedIn: null,
  userId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
      }
    default:
      return state;
  }
}

export const singIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}

