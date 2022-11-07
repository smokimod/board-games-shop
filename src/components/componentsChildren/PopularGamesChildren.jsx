import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const PopularGamesChildren = () => {
  const games = useSelector((state) => state.randomGames);

  return (
    <React.Fragment>
      <div className="realises_column">
        <div
          className="rel_container_item"
          style={games[1] && { backgroundImage: `url(${games[1].image_url})` }}
        >
          <div className="item_info">
            <NavLink className="item_button">Show Info</NavLink>
          </div>
        </div>
        <div
          className="rel_container_item"
          style={
            games[4] && {
              background: `url(${games[4].image_url})`,
            }
          }
        >
          <div className="item_info">
            <NavLink className="item_button">Show Info</NavLink>
          </div>
        </div>
      </div>
      <div className="rel_container_bigItem">
        <h2>Search Game You Would like!</h2>
        <button className="item_button">Shop</button>
      </div>
      <div className="realises_column">
        <div
          className="rel_container_item"
          style={games[2] && { background: `url(${games[2].image_url})` }}
        >
          <div className="item_info">
            <NavLink className="item_button">Show Info</NavLink>
          </div>
        </div>
        <div
          className="rel_container_item"
          style={games[0] && { background: `url(${games[0].image_url})` }}
        >
          <div className="item_info">
            <NavLink className="item_button">Show Info</NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default PopularGamesChildren;
