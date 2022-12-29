import React from "react";
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
  addToCart,
  isItemInCart,
}) => {
  return (
    <div className="gameInfo-container">
      <div className="game-info">
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
              <span>
                <i className="users icon"></i>
                {players}
              </span>
              <span>
                <i className="clock outline icon"></i>
                {time} min
              </span>
              <span>
                <i className="star icon"></i>
                {rank}
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
      </div>
    </div>
  );
};
