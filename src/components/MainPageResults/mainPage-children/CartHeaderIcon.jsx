import React from "react";
import "../../../styles/MainPageResults/CartHeaderIcon.css";
import { useDispatch, useSelector } from "react-redux";
import { cartClear } from "../../../Redux/reducers/cartReducers";
import { CartIconGames } from "./CartIconGames/CartIconGames";

export const CartHeaderIcon = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.itemsCart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );
  const clearCart = () => {
    dispatch(cartClear([]));
    localStorage.clear("cart");
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
                  <div onClick={clearCart} className="ui primary button">
                    Clear cart
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};
