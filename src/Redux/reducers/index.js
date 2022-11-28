import { combineReducers } from "redux";
import { gamesList } from "./gamesReducer";
import { authReducer } from "./authReducer";
import { popularGames } from "./gamesReducer";
import { specialGames } from "./gamesReducer";
import { searchParams } from "./searchReducer";
export default combineReducers({
  games: gamesList,
  popular: popularGames,
  auth: authReducer,
  specials: specialGames,
  sample: searchParams,
});
