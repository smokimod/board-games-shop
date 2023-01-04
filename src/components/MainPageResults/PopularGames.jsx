import React from "react";
import "../../styles/mainPageStyles/PopularGames.css";
import { PopularGamesChildren } from "./mainPage-children/PopularGamesChildren";

export const PopularGames = () => {
  return (
    <section className="new_realises_block">
      <div className="realises_container">
        <PopularGamesChildren />
      </div>
    </section>
  );
};
