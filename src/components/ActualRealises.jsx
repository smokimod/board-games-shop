import React from "react";
import { useSelector } from "react-redux";
import "../styles/ActualRealises.css";

export const ActualRealises = () => {
  const current = new Date();
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }, ${current.getFullYear()}`;
  const game = useSelector((state) => state.games);

  const actualGames = game.slice(7, 11).map((item) => {
    return (
      <div className="actual-game" key={item.id}>
        <div>
          <img src={item.image_url} alt={item.images.original} />
        </div>
        <h3>{item.name}</h3>
        <span>$ {item.price}</span>
      </div>
    );
  });

  return (
    <div className="actual-realises-block autumn">
      <div className="actual-realises-container">
        <div className="actual-realises-info">
          <article className="actual-date">
            <span style={{ backgroundColor: "white" }}>
              Actual Date: {date}
            </span>
            <button className="item_button actual">See All New Realises</button>
          </article>
          <div className="actual-realises-content">{actualGames}</div>
        </div>
      </div>
    </div>
  );
};
