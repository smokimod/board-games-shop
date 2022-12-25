import React from "react";
import "../../../styles/MyCart.css";

export const CartItems = ({
  item,
  image,
  price,
  name,
  removeItem,
  quantity,
  increase,
  decrease,
}) => {
  const totalItemPrice = quantity * price;
  return (
    <tr>
      <td>
        <button onClick={() => removeItem(item)}>
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
            <button onClick={() => increase(item)}>+</button>
            <span>
              {quantity} X ${price}
            </span>
            <button
              onClick={() => decrease(item)}
              disabled={quantity === 1 ? "disabled" : ""}
            >
              -
            </button>
          </div>
        </div>
      </td>
      <td className="right aligned">
        <span style={{ color: "green" }}>${totalItemPrice.toFixed(2)}</span>
      </td>
    </tr>
  );
};
