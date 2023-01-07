import React from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/SearhResulets.css";

export const SearchedGames = ({
  id,
  name,
  image,
  price,
  item,
  addToCart,
  isItemInCart,
}) => {
  return (
    <div className="ui yellow fluid card">
      <div className="image">
        <NavLink
          href="#top"
          className="ui link centered card"
          to={`/currentGame/${id}`}
        >
          <img
            src={image}
            alt={require("../../../styles/images/no_image.png")}
          />
        </NavLink>
      </div>
      <div className="content">
        <i className="right floated like icon"></i>
        <div className="header">{name}</div>
        <div className="meta">
          <div
            style={{
              cursor: "default",
              color: "green",
              padding: "5px 0",
            }}
          >
            <span
              style={{
                fontWeight: "800",
                fontSize: "1.3rem",
                padding: "10px 0",
              }}
            >
              ${price}
            </span>
          </div>
        </div>
        <div className="description">
          {item.description_preview.split(" ").slice(0, 14).join(" ")}
          ...
        </div>
      </div>
      <div className="extra content">
        <button
          onClick={() => {
            addToCart(item);
          }}
          className={`ui fluid toggle ${
            isItemInCart ? "yellow" : "active"
          } button`}
          style={{ color: "black" }}
        >
          <i className={`shop icon`}></i>
          {isItemInCart ? "Remove" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
