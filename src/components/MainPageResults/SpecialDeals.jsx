import React from "react";
import "../../styles/MainPageResults/SpecialDeals.css";
import { SimpleSlider } from "./mainPage-children/SpecialSlider";

export const SpecialDeals = () => {
  return (
    <section className="specialDeals-block">
      <div className="specialDeals-logo">
        <h2>For Big Company</h2>
      </div>
      <SimpleSlider />
    </section>
  );
};
