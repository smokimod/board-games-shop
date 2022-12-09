import React from "react";
import "../../../styles/MyCart.css";

export const CartItems = ({
  id,
  image,
  price,
  name,
  removeItem,
  count,
  setCount,
}) => {
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
        <div className="inc-dec-view">
          <button onClick={() => setCount(count + Number(price))}>+</button>
          <div> ${count.toFixed(2)}</div>
          <button onClick={() => setCount(count + Number(price))}>-</button>
        </div>
      </td>
      <td className="right aligned">$35</td>
    </tr>
  );
};
