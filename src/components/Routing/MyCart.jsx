import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/MyCart.css";

export const MyCart = () => {
  const cart = useSelector((state) => state.cart.itemsCart);
  const [count, setCount] = useState(0);
  console.log(cart);
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
          <table className="ui unstackable table">
            <thead>
              <tr>
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
                    <tr key={item.id}>
                      <td>
                        <img src={item.images.small} />
                      </td>
                      <td>{item.name}</td>
                      <td>
                        <div>
                          <button
                            onClick={() =>
                              setCount(count + Math.floor(Number(item.price)))
                            }
                          >
                            click
                          </button>
                        </div>
                        ${count}
                      </td>
                      <td className="right aligned">$35</td>
                    </tr>
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
