import React from "react";
import { useSelector } from "react-redux";
import "../../../styles/mainPageStyles/CartHeaderIcon.css";
import { CartIconGames } from "./CartIconGames/CartIconGames";

export const CartHeaderIcon = () => {
  const cart = useSelector((state) => state.cart.itemsCart);
  const totalPrice = cart.reduce(
    (acc, item) => (acc = Number(acc) + Number(item.price)),
    0
  );

  return (
    <>
      {cart.length > 0 ? (
        <div className="scale-up-center">
          <div className="totalPriceBar-content">
            <div className="totalPriceBar-gameList">
              {cart.length > 0
                ? cart.map((item) => (
                    <CartIconGames
                      key={item.id}
                      name={item.name}
                      price={item.price}
                    />
                  ))
                : null}
            </div>
            {cart.length > 0 ? (
              <div className="cart-menu">
                <div className="cart-menu-totalPrice">
                  <span>Total:</span>
                  <span style={{ color: "green" }}>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};
