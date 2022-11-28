const INPUT_VALUE = "INPUT_VALUE";
const RESET_VALUE = "RESET_VALUE";

const initState = {
  value: "",
  resetValue: "",
};

export const searchParams = (state = initState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return { ...state, value: action.payload };
    case RESET_VALUE:
      return { ...state, value: "" };
    default:
      return state;
  }
};
