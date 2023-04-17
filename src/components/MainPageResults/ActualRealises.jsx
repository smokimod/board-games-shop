import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ActualGamesList } from "./mainPage-children/ActualGamesList";
import { Container, Grid } from "@mui/material";

import "../../styles/MainPageResults/ActualRealises.css";

export const ActualRealises = () => {
  const [currentDate, setCurrentDate] = useState("");
  const games = useSelector((state) => state.actual.games);
  const date = new Date().toLocaleString("en-US", { month: "long" });
  useEffect(() => {
    function seasons() {
      if (date === "September" || date === "October" || date === "November") {
        return setCurrentDate("autumn");
      }
      if (date === "December" || date === "February" || date === "January") {
        return setCurrentDate("winter");
      }
      if (date === "Marth" || date === "April" || date === "May") {
        return setCurrentDate("spring");
      }

      return "summer";
    }
    seasons();
  }, [date, currentDate]);
  const actualGames =
    games && games.length > 0
      ? games.slice(0, 10).map((item) => {
          return (
            <React.Fragment key={item.id}>
              <ActualGamesList
                id={item.id}
                name={item.name}
                image={item.image_url}
                price={item.price === "0.00" ? item.price_uk : item.price}
                description={item.description_preview}
              />
            </React.Fragment>
          );
        })
      : null;

  return (
    <div className={`actual-realises-block ${currentDate}`}>
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
