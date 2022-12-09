import React from "react";
import { NavLink } from "react-router-dom";

export const GameItems = ({ id, name, image, index, item }) => {
  return (
    <div
      className={
        index === 1 || index === 4 ? "additional-item grow" : "additional-item"
      }
      style={item && { backgroundImage: `url(${image})` }}
    >
      <h2>{name}</h2>
      <NavLink
        className="ui circular medium yellow button link"
        to={`/currentGame/${id}`}
      >
        Show Info
      </NavLink>
    </div>
  );
};
