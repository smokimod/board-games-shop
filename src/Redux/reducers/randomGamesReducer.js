const type = "GET_RANDOM_GAMES";

export const randomGames = (state = [], action) => {
  switch (action.type) {
    case type:
      return action.payload.data.games;
    default:
      return state;
  }
};
export const getRandomGames = (payload) => ({ type: type, payload });
