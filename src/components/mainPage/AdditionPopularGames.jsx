import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../styles/ActualRealises.css";

export const AdditionPopularGames = () => {
  const games = useSelector((state) => state.games.games);

  const gamesList =
    games && games.length > 0
      ? games.slice(4, 10).map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                index === 1 || index === 4
                  ? "additional-item grow"
                  : "additional-item"
              }
              style={item && { backgroundImage: `url(${item.image_url})` }}
            >
              <h2>{item.name}</h2>
              <NavLink
                className="ui circular medium yellow button link"
                to={`/currentGame/${item.id}`}
              >
                Show Info
              </NavLink>
            </div>
          );
        })
      : games;

  return (
    <div className="additional-games-block">
      <div className="additional-games-container">
        <h2 className="heading">Popular games</h2>
        <div className="additional-games-content">{gamesList}</div>
      </div>
    </div>
  );
};
