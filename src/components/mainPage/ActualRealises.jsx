import React from "react";
import { useSelector } from "react-redux";
import "../../styles/ActualRealises.css";
import { NavLink } from "react-router-dom";

export const ActualRealises = () => {
  const current = new Date();
  const month = current.toLocaleString("default", { month: "long" });
  const date = `${current.getDate()}-${month}, ${current.getFullYear()}`;
  const games = useSelector((state) => state.games.games);

  const getMonth = () => {
    if (month === "September" || "October" || "November") {
      return "autumn";
    } else if (month === "December" || "Junuary" || "Febuary") {
      return "winter";
    } else if (month === "Marth" || "April" || "May") {
      return "spring";
    }
    return "summer";
  };

  const actualGames =
    games && games.length > 0
      ? games.slice(7, 11).map((item) => {
          return (
            <div className="actual-game" key={item.id}>
              <div>
                <NavLink to={`/currentGame/${item.id}`} className="slider-info">
                  <img src={item.image_url} alt={item.images.original} />
                </NavLink>
              </div>
              <h3 style={{ cursor: "default" }}>{item.name}</h3>
              <span style={{ cursor: "default" }}>$ {item.price}</span>
            </div>
          );

          //   <div className="ui yellow card" key={item.id}>
          //     <div className="ui image">
          //       <NavLink
          //         className="ui link small centered card"
          //         to={`/currentGame/${item.id}`}
          //       >
          //         <img
          //           src={item.image_url}
          //           alt={require("../styles/images/no_image.png")}
          //         />
          //       </NavLink>
          //     </div>
          //     <div className="content">
          //       <i className="right floated like icon"></i>
          //       <div className="header">{item.name}</div>
          //       <div className="meta">
          //         <div style={{ cursor: "default", color: "green" }}>
          //           <i className="green dollar sign icon"> </i>
          //           {item.price}
          //         </div>
          //       </div>
          //     </div>
          //     <div className="extra content">
          //       <div
          //         className="ui attached yellow button"
          //         style={{ color: "black" }}
          //       >
          //         <i className="shop red icon"></i>
          //         Add to Cart
          //       </div>
          //     </div>
          //   </div>
          // );
        })
      : games;

  return (
    <div className={`actual-realises-block ${getMonth()}`}>
      <div className="actual-realises-container">
        <div className="actual-realises-info">
          <article className="actual-date">
            <h2 className="actual-heading">New: {date}</h2>
            <button className="circular medium ui button yellow">
              <NavLink className="">Look For new Realises</NavLink>
            </button>
          </article>
          <div className="actual-realises-content">{actualGames}</div>
        </div>
      </div>
    </div>
  );
};
