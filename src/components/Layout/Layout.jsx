import React, { useState } from "react";
import "../../style.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

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
