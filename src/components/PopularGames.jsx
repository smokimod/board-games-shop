import React from "react";
import "../styles/PopularGames.css";
import { PopularGamesChildren } from "../components/componentsChildren/PopularGamesChildren";

export const PopularGames = () => {
  return (
    <section className="new_realises_block">
      <div className="new_realises_container">
        <div className="realises_container">
          <PopularGamesChildren />
        </div>
      </div>
    </section>
  );
};
