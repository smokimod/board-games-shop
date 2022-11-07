import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const AdditionPopularGames = () => {
  const games = useSelector((state) => state.games);

  const array = games.slice(4, 10).map((item, index) => {
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
        <div className="item_info">
          <NavLink className="item_button">Show Info</NavLink>
        </div>
      </div>
    );
  });

  return (
    <div className="additional-games-block">
      <div className="additional-games-container">
        <div className="additional-games-content">{array}</div>
      </div>
    </div>
  );
};
