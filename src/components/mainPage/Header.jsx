import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GoogleAuth from "../../GoogleAuth";
import "../../styles/Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const sample = useSelector((state) => {
    return state.sample.value;
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    dispatch({ type: "INPUT_VALUE", payload: e.target.value });
  };

  return (
    <header className="header" id="myHeader">
      <div className="menu" name="top">
        <div className="menu_items">
          <aside className="menu-items-email">
            <NavLink to="/">
              <h2>Ninja Shop</h2>
              <div className="header-logo"></div>
            </NavLink>
          </aside>
          <div>
            {/* <GoogleAuth /> */}
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
              value={sample}
              onChange={handleChange}
            />
            <Link to={`/searchResults/${sample}`}>
              <button style={{ height: "100%" }} type="submit">
                <i className="search icon" />
              </button>
            </Link>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
