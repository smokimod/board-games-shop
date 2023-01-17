import axios from "axios";
import {
  getGames,
  getPopularGames,
  getSpecialGames,
  getActualGames,
} from "../reducers/gamesReducer";

export const getBoardGamesData = () => async (dispatch) => {
  const responseGames = await axios.get(
    `https://api.boardgameatlas.com/api/search?gt_reddit_count=30&limit=20&pretty=true&client_id=VqVYih77GT`
  );
  dispatch(getGames(responseGames));

  const responsesPopularGames = await axios.get(
    `https://api.boardgameatlas.com/api/search?year_published=2018&ascending=false&pretty=true&client_id=VqVYih77GT`
  );
  dispatch(getPopularGames(responsesPopularGames));

  const responsesSpecialGames = await axios.get(
    `https://api.boardgameatlas.com/api/search?gt_max_players=4&gt_year_published=2019&limit=20pretty=true&client_id=VqVYih77GT`
  );
  dispatch(getSpecialGames(responsesSpecialGames));

  const responsesActuallGames = await axios.get(
    `https://api.boardgameatlas.com/api/search?year_published=2022&ascending=false&limit=20pretty=true&client_id=VqVYih77GT`
  );
  dispatch(getActualGames(responsesActuallGames));
};
