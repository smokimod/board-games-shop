import React from "react";
import "../../styles/SearhResulets.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { PaginationBar } from "./Pagination";

export const SearchResults = () => {
  const games = useSelector((state) => state.games.games);
  const sample = useSelector((state) => state.sample.value);

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

  return (
    <div className="search-block">
      <div className="search-container">
        <div className="search-categories">
          <h2>Search By </h2>
          {arr}
        </div>
        <div className="search-results">
          <div className="results-info">
            <h2>Results of Search: {sample}</h2>
          </div>
          <PaginationBar />
        </div>
      </div>
    </div>
  );
};
