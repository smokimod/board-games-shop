import React from "react";
import "../../styles/mainPageStyles/ActualRealises.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ActualItem } from "./mainPage-children/ActualGamesList";
import { Container, Grid } from "@mui/material";

export const ActualRealises = () => {
  const current = new Date();
  const month = current.toLocaleString("default", { month: "long" });
  const date = `${current.getDate()}-${month}, ${current.getFullYear()}`;
  const games = useSelector((state) => state.games.games);

  const getMonth = () => {
    if (month === "September" || month === "October" || month === "November") {
      return "autumn";
    } else if (
      month === "December" ||
      month === "декабрь" ||
      month === "Junuary" ||
      month === "январь" ||
      month === "Febuary" ||
      month === "февраль"
    ) {
      return "winter";
    } else if (month === "Marth" || month === "April" || month === "May") {
      return "spring";
    }
    return "summer";
  };

  const actualGames =
    games && games.length > 0
      ? games.slice(7, 17).map((item) => {
          return (
            <React.Fragment key={item.id}>
              <ActualItem
                id={item.id}
                name={item.name}
                image={item.image_url}
                price={item.price}
                description={item.description_preview}
              />
            </React.Fragment>
          );
        })
      : null;

  return (
    <div className={`actual-realises-block ${getMonth()}`}>
      <div className="actual-realises-container">
        <div className="actual-realises-info">
          <div className="actual-heading">
            <h2>
              <time>New: {date}</time>
            </h2>
          </div>
          <Container p={{ xs: 1, sm: 3 }}>
            <Grid
              columns={{ md: -5, lg: 0, xl: 0 }}
              container
              spacing={{ xs: 2.5, sm: 3, md: 2 }}
              textAlign="center"
              justifyContent="center"
            >
              {actualGames}
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};
