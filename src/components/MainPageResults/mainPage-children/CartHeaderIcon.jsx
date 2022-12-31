import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartClear } from "../../../Redux/reducers/cartReducers";
import "../../../styles/mainPageStyles/CartHeaderIcon.css";
import { CartIconGames } from "./CartIconGames/CartIconGames";

export const CartHeaderIcon = ({ handleMouseOver }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.itemsCart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );
  const clearCart = () => {
    dispatch(cartClear([]));
  };

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
                      quantity={item.quantity}
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
                  <button onClick={clearCart} className="ui primary button">
                    Clear cart
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};
