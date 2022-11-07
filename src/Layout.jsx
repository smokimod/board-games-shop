import React from "react";
import "./style.css";
import "./styles/AdditionalPopularGames.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

const Layout = () => {
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

export default Layout;
