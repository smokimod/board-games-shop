import axios from "axios";
import {
  getGames,
  getPopularGames,
  getSpecialGames,
} from "../reducers/gamesReducer";

export const getBoardGamesData = () => async (dispatch) => {
  const responseGames = await axios.get(
    `https://api.boardgameatlas.com/api/search?name='Catan'&limit=25&client_id=VqVYih77GT`
  );
  dispatch(getGames(responseGames));

  // const responsesPopularGames = await axios.get(
  //   "https://api.boardgameatlas.com/api/search?&ascending=false&pretty=true&client_id=VqVYih77GT"
  // );
  // dispatch(getPopularGames(responsesPopularGames));

  const responsesSpecialGames = await axios.get(
    `https://api.boardgameatlas.com/api/search?gt_discount=0.5&pretty=true&client_id=VqVYih77GT`
  );
  dispatch(getSpecialGames(responsesSpecialGames));
};
