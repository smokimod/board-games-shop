const INITIAL_STATE = {
  isSignedIn: localStorage.getItem("user") === null ? false : true,
  userId: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export const signIn = (payload) => ({
  type: SIGN_IN,
  payload,
});
export const signOut = (payload) => ({
  type: SIGN_OUT,
  payload,
});
