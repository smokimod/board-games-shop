import axios from "axios";
import {
  getGames,
  getPopularGames,
  getSpecialGames,
} from "../reducers/gamesReducer";

export const getBoardGamesData = () => async (dispatch) => {
  const responseGames = await axios.get(
    `https://api.boardgameatlas.com/api/search?gt_year_published=2020&limit=25&pretty=true&client_id=VqVYih77GT`
  );
  dispatch(getGames(responseGames));

  const responsesPopularGames = await axios.get(
    `https://api.boardgameatlas.com/api/search?&year_published=2017&ascending=false&pretty=true&client_id=VqVYih77GT`
  );
  dispatch(getPopularGames(responsesPopularGames));

  const responsesSpecialGames = await axios.get(
    `https://api.boardgameatlas.com/api/search?gt_min_players=2&limit=25&pretty=true&client_id=VqVYih77GT`
  );
  dispatch(getSpecialGames(responsesSpecialGames));
};
