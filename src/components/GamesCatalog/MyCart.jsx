import React, { useEffect, useState } from "react";
import "../../styles/SearchedGames/MyCart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cartDeleter,
  cartQuantityAdd,
  cartQuantityRemove,
} from "../../Redux/reducers/cartReducers";

import { CartItems } from "./CartItems/CartItems";
import { ModalCartItems } from "./CartItems/ModalCartItems";

export const MyCart = () => {
  const [modal, setModal] = useState(false);
  const cart = useSelector((state) => state.cart.itemsCart);
  const isAuth = useSelector((state) => state.auth.isSignedIn);
  const dispatch = useDispatch();
  const increase = (item) => {
    dispatch(cartQuantityAdd(item));
  };
  const decrease = (item) => {
    dispatch(cartQuantityRemove(item));
  };

  const removeItem = (item) => {
    dispatch(cartDeleter(item));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const totalPrice = cart.reduce(
    (a, b) => a + Number(b.price) * Number(b.quantity),
    0
  );

  return (
    <>
      <div className="cart-block">
        <ModalCartItems modal={modal} setModal={() => setModal(false)} />
        <section className="ui main container">
          <div className="your-cart">
            <h1>Your Cart</h1> <span></span>
          </div>

          {isAuth ? (
            <div className="ui positive message">
              <i className="close icon"></i>
              <div className="header">You're sign in!</div>
              <p>
                Now you <b>can buy</b> many games
              </p>
            </div>
          ) : (
            <div className="ui bottom attached warning message">
              <i className="exclamation triangle big icon"></i>
              <span>
                For futher purchases and status tracking you must be authorized
                on website, we are higly recomend you to sign in.
              </span>
            </div>
          )}
          <table className="ui fluid stackable table">
            <thead>
              <tr>
                <th></th>
                <th>Photo</th>
                <th>Name</th>
                <th>Price</th>
                <th className="right aligned">
                  total {Number(totalPrice).toFixed(2)}
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <CartItems
                        id={item.id}
                        name={item.name}
                        image={item.images.small}
                        item={item}
                        price={item.price}
                        removeItem={removeItem}
                        quantity={item.quantity}
                        increase={increase}
                        decrease={decrease}
                      />
                    </React.Fragment>
                  );
                })
              ) : (
                <tr>
                  <td>NOTHING HERE</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="ui center aligned segment">
            <button
              className="ui button primary"
              onClick={() => setModal(true)}
              disabled={cart.length > 0 ? "" : "disabled"}
            >
              Make a purchase
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
