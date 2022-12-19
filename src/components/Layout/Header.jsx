import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GoogleAuth from "../../GoogleAuth";
import "../../styles/mainPageStyles/Header.css";
import { CartHeaderIcon } from "../MainPageResults/mainPage-children/CartHeaderIcon";

export const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();
  const sample = useSelector((state) => {
    return state.sample.value;
  });
  const cart = useSelector((state) => state.cart.itemsCart);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    dispatch({ type: "INPUT_VALUE", payload: e.target.value });
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="ui secondary massive menu">
      <NavLink to="/" className="item header-logo">
        Game Board Shop
      </NavLink>
      <div className="right menu">
        <div className="right  item">
          <form className="ui icon big input" onSubmit={onSubmit}>
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search..."
                value={sample}
                onChange={handleChange}
                required
              />
              <NavLink to={`/searchResults/${sample}`}>
                <button
                  className="ui red icon button"
                  style={{ height: "100%" }}
                >
                  <i className="search big  icon" />
                </button>
              </NavLink>
            </div>
          </form>
        </div>
        <NavLink
          className="item link"
          to="/myCart"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <i className="shop   icon"></i>
          <div className={cart.length ? "floating ui blue label" : ""}>
            {cart.length ? Number(cart.length) : ""}
          </div>
          {isHovering && <CartHeaderIcon />}
        </NavLink>

        <div className="ui item">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};
