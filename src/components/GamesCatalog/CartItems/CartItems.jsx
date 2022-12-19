import React, { useState } from "react";
import "../../../styles/MyCart.css";

export const CartItems = ({ id, image, price, name, removeItem }) => {
  const [counters, setCounters] = useState(1);

  const increase = () => {
    setCounters(counters + 1);
  };
  const decrease = () => {
    setCounters(counters - 1);
  };
  return (
    <tr>
      <td>
        <button onClick={() => removeItem(id)}>
          <i className="trash red centered icon" />
        </button>
      </td>
      <td>
        <img src={image} alt={require("../../../styles/images/no_image.png")} />
      </td>
      <td>{name}</td>
      <td>
        <div>
          <div className="inc-dec-view">
            <button onClick={increase}>+</button>
            <div>
              {counters} X ${counters * price}
            </div>

            <button onClick={decrease}>-</button>
          </div>
        </div>
      </td>
      <td className="right aligned">$35</td>
    </tr>
  );
};
