import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { authReducer } from "./authReducer";
import { popularReducer } from "./gamesReducer";
import { specialReducer } from "./gamesReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducers";
import { actualReducer } from "./gamesReducer";

export default combineReducers({
  games: gamesReducer,
  popular: popularReducer,
  specials: specialReducer,
  actual: actualReducer,
  auth: authReducer,
  sample: searchReducer,
  cart: cartReducer,
});
