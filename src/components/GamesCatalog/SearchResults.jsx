import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { PaginationBar } from "./Pagination";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "../../styles/SearchedGames/SearhResulets.css";

export const SearchResults = () => {
  const sample = useSelector((state) => state.sample.value);
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const mechanics = [1, 2, 3].map((i) => {
    return (
      <div className="ui huge link list" key={i}>
        <div className="active item">Area control</div>
        <NavLink className="item">Cards engine</NavLink>
        <NavLink className="item">Party games</NavLink>
        <NavLink className="item">Strategie</NavLink>
      </div>
    );
  });

  return (
    <div className="search-block">
      <div className="search-container">
        <div className="search-categories">
          <div className="search-categories-head">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Sort"
                  onChange={handleChange}
                >
                  <MenuItem value={"rating"}>By rating</MenuItem>
                  <MenuItem value={"hightolow"}>Higth price</MenuItem>
                  <MenuItem value={"lowtohigh"}>Low price</MenuItem>
                  <MenuItem value={"hightime"}>Higth playtime</MenuItem>
                  <MenuItem value={"lowtime"}>Low playtime</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <h2>Search By </h2>
          </div>
          {mechanics}
        </div>
        <div className="search-results">
          <div className="results-info">
            <h2>Results of Search: {sample}</h2>
          </div>
          <PaginationBar category={category} />
        </div>
      </div>
    </div>
  );
};
