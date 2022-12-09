import React from "react";
import { NavLink } from "react-router-dom";

export const ActualGamesList = ({ id, image, name, price }) => {
  return (
    <div className="actual-game">
      <div>
        <NavLink to={`/currentGame/${id}`} className="slider-info">
          <img
            src={image}
            alt={require("../../../styles/images/no_image.png")}
          />
        </NavLink>
      </div>
      <h3 style={{ cursor: "default" }}>{name}</h3>
      <span style={{ cursor: "default" }}>$ {price}</span>
    </div>
  );
};
