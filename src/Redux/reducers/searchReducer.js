const INPUT_VALUE = "INPUT_VALUE";

const initState = {
  value: "",
};

export const searchParams = (state = initState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

// export const searchGames = (payload) => ({ type: INPUT_VALUE, payload });
