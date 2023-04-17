import React from "react";
import { SimpleSlider } from "./mainPage-children/SpecialSlider";

import "../../styles/MainPageResults/SpecialDeals.css";

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
