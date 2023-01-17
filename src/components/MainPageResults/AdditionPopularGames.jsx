import React from "react";
import "../../styles/MainPageResults/AdditionalPopularGames.css";
import { useSelector } from "react-redux";
import { GameItems } from "./mainPage-children/GameItems";

export const AdditionPopularGames = () => {
  const games = useSelector((state) => state.popular.games);

  const gamesList =
    games && games.length > 0
      ? games.slice(0, 6).map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <GameItems
                id={item.id}
                name={item.name}
                image={item.image_url}
                index={index}
                item={item}
              />
            </React.Fragment>
          );
        })
      : null;

  return (
    <div className="additional-games-block">
      <div className="additional-games-container">
        <h2 className="heading">Popular games</h2>
        <div className="additional-games-content">{gamesList}</div>
      </div>
    </div>
  );
};
