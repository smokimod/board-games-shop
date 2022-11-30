const INPUT_VALUE = "INPUT_VALUE";

const initState = {
  value: "",
};

export const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
