const GET_GAMES_DATA = "GET_GAMES_DATA";
const GET_POPULAR_GAMES = "GET_POPULAR_GAMES";
const SPECIAL_GAMES_DATA = "SPECIAL_GAMES_DATA";

export const gamesReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_GAMES_DATA:
      return action.payload.data;
    default:
      return state;
  }
};

export const popularReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_POPULAR_GAMES:
      return action.payload.data;
    default:
      return state;
  }
};

export const specialReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case SPECIAL_GAMES_DATA:
      return action.payload.data;
    default:
      return state;
  }
};

export const getGames = (payload) => ({
  type: GET_GAMES_DATA,
  payload,
});
export const getPopularGames = (payload) => ({
  type: GET_POPULAR_GAMES,
  payload,
});
export const getSpecialGames = (payload) => ({
  type: SPECIAL_GAMES_DATA,
  payload,
});
