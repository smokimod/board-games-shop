const type = "SPECIAL_GAMES_DATA";

export const specialGames = (state = [], action) => {
  switch (action.type) {
    case type:
      return action.payload.data.games;
    default:
      return state;
  }
};

export const getSpecialGames = (payload) => ({ type: type, payload });
