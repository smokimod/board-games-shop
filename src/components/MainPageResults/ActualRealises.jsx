import React from "react";
import "../../styles/mainPageStyles/ActualRealises.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SolidGameCardDemo } from "./mainPage-children/ActualGamesList";

export const ActualRealises = () => {
  const current = new Date();
  const month = current.toLocaleString("default", { month: "long" });
  const date = `${current.getDate()}-${month}, ${current.getFullYear()}`;
  const games = useSelector((state) => state.games.games);

  const getMonth = () => {
    if (month === "September" || month === "October" || month === "November") {
      return "autumn";
    } else if (
      month === "декабрь" ||
      month === "Junuary" ||
      month === "Febuary"
    ) {
      return "winter";
    } else if (month === "Marth" || month === "April" || month === "May") {
      return "spring";
    }
    return "summer";
  };

  const actualGames =
    games && games.length > 0
      ? games.slice(7, 12).map((item) => {
          return (
            <React.Fragment key={item.id}>
              <SolidGameCardDemo
                id={item.id}
                name={item.name}
                image={item.image_url}
                price={item.price}
              />
            </React.Fragment>
          );
        })
      : null;

  return (
    <div className={`actual-realises-block ${getMonth()}`}>
      <div className="actual-realises-container">
        <div className="actual-realises-info">
          <h2 className="actual-heading">
            <time>New: {date}</time>
          </h2>
          <div className="actual-realises-content">{actualGames}</div>
        </div>
      </div>
    </div>
  );
};
