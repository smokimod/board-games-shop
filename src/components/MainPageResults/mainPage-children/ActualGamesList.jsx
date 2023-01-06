import React from "react";
import "../../../styles/mainPageStyles/ActualRealises.css";
import { Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ActualItem = ({ id, name, price, image, description }) => {
  return (
    <Grid item xs={6} sm={6} md={3} lg={2.4}>
      <div className="card">
        <div className="cover">
          <img src={image} alt="cover" />
        </div>
        <div className="card-content">
          <h4>{name}</h4> <span style={{ color: "green" }}>${price}</span>
          <p>{description}</p>
        </div>
        <NavLink to={`/currentGame/${id}`}>
          <button className="card-button">Details</button>
        </NavLink>
      </div>
    </Grid>
  );
};
