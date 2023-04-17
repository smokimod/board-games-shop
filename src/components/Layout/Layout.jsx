import React, { useState } from "react";
import { Outlet } from "react-router";

import { Header } from "./Header";
import { Footer } from "./Footer";

import "../../style.css";

export const Layout = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <Header handleMouseOver={handleMouseOver} isHovering={isHovering} />
      <main onMouseOut={handleMouseOut}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
