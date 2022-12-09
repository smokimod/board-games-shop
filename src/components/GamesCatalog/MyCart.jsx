import React from "react";
import "../../styles/MyCart.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDeleter } from "../../Redux/reducers/cartReducers";
import { CartItems } from "./CartItems/CartItems";

export const MyCart = () => {
  const cart = useSelector((state) => state.cart.itemsCart);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    dispatch(cartDeleter(item));
  };
  return (
    <div className="cart-block">
      <section className="cart-container">
        <div className="your-cart">
          <h1>Your Cart</h1>
        </div>
        <div className="cart-warning">
          <i className="exclamation triangle big icon"></i>
          <span>
            For futher purchases and status tracking you must be authorized on
            website, we are higly recomend you to sign in.
          </span>
        </div>
        <div className="cart-purchases">
          <table className="ui fluid unstackable table">
            <thead>
              <tr>
                <th></th>
                <th>Photo</th>
                <th>Name</th>
                <th>Price</th>
                <th className="right aligned">total</th>
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
                        count={count}
                        setCount={setCount}
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
        </div>
      </section>
    </div>
  );
};
