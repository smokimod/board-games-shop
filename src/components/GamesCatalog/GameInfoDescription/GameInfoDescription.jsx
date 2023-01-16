import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "./GameInfoDescription.css";

export const GameInfoDescription = ({
  name,
  image,
  price,
  publisher,
  year,
  time,
  players,
  rank,
  url,
  item,
  age,
  addToCart,
  isItemInCart,
}) => {
  const isAuth = useSelector((state) => state.auth.isSignedIn);
  return (
    <Container>
      <div className="game-info-head">
        <div className="game-img-container">
          <img
            className="game-img"
            src={image}
            alt="../../../styles/images/no_image.png"
          />
        </div>
        <div className="game-char">
          <h1 className="ui dividing header">
            {name}
            <div className="sub header">
              <span>
                {publisher}-{year}
              </span>
            </div>
          </h1>
          <div className="additional-info">
            <span className="info-item">
              <i className="child icon"></i>
              {age} age
            </span>
            <span className="info-item">
              <i className="users icon"></i>
              {players}
            </span>
            <span className="info-item">
              <i className="clock outline icon"></i>
              {time} min
            </span>

            <span className="info-item">
              <i className="star icon"></i>
              {rank.toFixed(2)}
            </span>
            <span>
              <i className="thumbtack icon"></i>
              <a href={url} alt="-" target="_blank" rel="noreferrer">
                Offical Page
              </a>
            </span>
          </div>
          <div className="stock">Available in stock</div>
          <div className="price">${price}</div>
          <div className="info-buy">
            <button
              disabled={isAuth ? "" : "disabled"}
              onClick={() => {
                addToCart(item);
              }}
              className={`ui  toggle ${
                isItemInCart ? "yellow" : "active"
              } button`}
              style={{ color: "black" }}
            >
              <i className={`shop icon`}></i>
              {isItemInCart ? "Remove" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
      <div className="game-description">{item.description_preview}</div>
    </Container>
  );
};
