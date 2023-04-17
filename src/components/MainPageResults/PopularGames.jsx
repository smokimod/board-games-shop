import React from "react";

import { PopularGamesChildren } from "./mainPage-children/PopularGamesChildren";

import "../../styles/MainPageResults/PopularGames.css";

export const PopularGames = () => {
  return (
    <section className="new_realises_block">
      <div className="realises_container">
        <PopularGamesChildren />
      </div>
    </section>
  );
};
