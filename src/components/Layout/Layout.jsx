import React from "react";
import "../../style.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <main>
      <Header />
      <div className="Outlet-container">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
