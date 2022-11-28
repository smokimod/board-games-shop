import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const PopularGamesChildren = () => {
  const games = useSelector((state) => state.popular.games);

  return (
    <React.Fragment>
      <div className="realises_column">
        <div
          className="rel_container_item"
          style={
            games && games.length > 0
              ? { backgroundImage: `url(${games[1].image_url})` }
              : games
          }
        >
          <button className="circular medium ui button yellow">
            <NavLink to={`/currentGame/${games[1].id}`}>Show Info</NavLink>
          </button>
        </div>
        <div
          className="rel_container_item"
          style={
            games && games.length > 0
              ? { backgroundImage: `url(${games[4].image_url})` }
              : games
          }
        >
          <button className="circular medium ui button yellow">
            <NavLink to={`/currentGame/${games[4].id}`}>Show Info</NavLink>
          </button>
        </div>
      </div>
      <div className="rel_container_bigItem">
        <h2>Search Game You Would like!</h2>
        <NavLink
          to={`/searchResults/`}
          className="ui fluid circular big yellow link button"
        >
          Search Among Popular Games!
        </NavLink>
      </div>
      <div className="realises_column">
        <div
          className="rel_container_item"
          style={
            games && games.length > 0
              ? { backgroundImage: `url(${games[2].image_url})` }
              : games
          }
        >
          <button className="circular medium ui button yellow">
            <NavLink to={`/currentGame/${games[2].id}`}>Show Info</NavLink>
          </button>
        </div>
        <div
          className="rel_container_item"
          style={
            games && games.length > 0
              ? { backgroundImage: `url(${games[0].image_url})` }
              : games
          }
        >
          <button className="circular medium ui button yellow">
            <NavLink className="">Show Info</NavLink>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PopularGamesChildren;
