import React from "react";
import "./CartIconGames.css";

export const CartIconGames = ({ name, price, quantity }) => {
  return (
    <div className="cart-item">
      <span>{name}</span>
      <div className="cart-item-price">
        <span>
          ${price} X {quantity}
        </span>
      </div>
    </div>
  );
};
