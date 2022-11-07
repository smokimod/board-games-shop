import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GoogleAuth from "../GoogleAuth";
import "../styles/Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => {
    return state.sample.value;
  });

  window.onscroll = () => fixedHeader();

  const fixedHeader = () => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    window.pageYOffset > sticky
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };

  const onSubmit = (e) => e.preventDefault();

  const handleChange = (e) => {
    dispatch({ type: "INPUT_VALUE", payload: e.target.value });
  };

  return (
    <header className="header" id="myHeader">
      <div className="menu" name="top">
        <div className="menu_items">
          <aside className="menu_items_email">
            <NavLink to="/">
              <h2>Ninja Shop</h2>
            </NavLink>
          </aside>
          <div>
            <GoogleAuth />
            <NavLink to="/gameInfo">
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content active">Shop</div>
                <div className="visible content">
                  <i className="shop icon"></i>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="menu_container">
        <div>
          <form className="ui icon massive input" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={handleChange}
            />
            <NavLink to="/searchResults">
              <button className="ui icon button" style={{ height: "100%" }}>
                <i className="search icon" />
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
