import React from "react";
import "../../styles/SearhResulets.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const SearchResults = ({ itemsPerPage }) => {
  const games = useSelector((state) => state.games);

  const arr = [1, 2, 3].map((i) => {
    return (
      <div className="ui huge link list" key={i}>
        <div className="active item">Home</div>
        <NavLink className="item">About</NavLink>
        <NavLink className="item">Работы</NavLink>
        <NavLink className="item">Team</NavLink>
      </div>
    );
  });

  const gamesList = games.map((item) => {
    return (
      <div className="search-game" key={item.id}>
        <div>
          <img src={item.image_url} alt={item.images.original} />
        </div>
        <h3>{item.name}</h3>
        <span>$ {item.price}</span>
      </div>
    );
  });

  return (
    <div className="search-block">
      <div className="search-container">
        <div className="search-categories">
          <h2>Search By:</h2>
          {arr}
        </div>
        <div className="search-results">
          <div className="results-info">
            <h2>Results of Search</h2>
            <div className="ui icon big input">
              <input type="text" placeholder="Search..." />
              <NavLink to="/searchResults">
                <button className="ui icon button" style={{ height: "100%" }}>
                  <i className="search icon" />
                </button>
              </NavLink>
            </div>
          </div>
          <div className="searched-games">{gamesList}</div>
          <div>Pagination</div>
        </div>
      </div>
    </div>
  );
};
