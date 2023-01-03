import React from "react";
import "../../styles/mainPageStyles/SpecialDeals.css";
import { SimpleSlider } from "./mainPage-children/SpecialSlider";

export const SpecialDeals = () => {
  return (
    <section className="specialDeals-block">
      <div className="specialDeals-logo">
        <h2>Top Sales</h2>
      </div>
      <SimpleSlider />
    </section>
  );
};
