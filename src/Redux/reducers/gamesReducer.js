const type = "GET_GAMES_DATA";

export const gamesList = (state = [], action) => {
  switch (action.type) {
    case type:
      return action.payload.data.games;
    default:
      return state;
  }
};

export const getGames = (payload) => ({ type: type, payload });
