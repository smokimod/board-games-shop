import { combineReducers } from "redux";
import { gamesList } from "./gamesReducer";
import { authReducer } from "./authReducer";
import { randomGames } from "./randomGamesReducer";
import { specialGames } from "./specialsReducer";
import { searchParams } from "./searchReducer";
export default combineReducers({
  games: gamesList,
  randomGames: randomGames,
  auth: authReducer,
  specials: specialGames,
  sample: searchParams,
});
