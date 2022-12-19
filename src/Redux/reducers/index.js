import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { authReducer } from "./authReducer";
import { popularReducer } from "./gamesReducer";
import { specialReducer } from "./gamesReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer, itemCouner } from "./cartReducers";

export default combineReducers({
  games: gamesReducer,
  popular: popularReducer,
  auth: authReducer,
  specials: specialReducer,
  sample: searchReducer,
  cart: cartReducer,
  counter: itemCouner
});
