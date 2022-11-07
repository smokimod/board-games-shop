import axios from "axios";
import { getGames } from "../reducers/gamesReducer";
import { getRandomGames } from "../reducers/randomGamesReducer";
import { getSpecialGames } from "../reducers/specialsReducer";

export const getBoardGamesData = () => async (dispatch) => {
  const responseGames = await axios.get(
    "https://api.boardgameatlas.com/api/search?name=Catan&client_id=VqVYih77GT"
  );
  dispatch(getGames(responseGames));

  const responsesRandomGames = await axios.get(
    "https://api.boardgameatlas.com/api/search?name=Catan&ascending=false&pretty=true&client_id=VqVYih77GT"
  );
  dispatch(getRandomGames(responsesRandomGames));

  const responsesSpecialGames = await axios.get(
    `https://api.boardgameatlas.com/api/search?gt_discount=0.5&pretty=true&client_id=VqVYih77GT`
  );
  dispatch(getSpecialGames(responsesSpecialGames));
};
