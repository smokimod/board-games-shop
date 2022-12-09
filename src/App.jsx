import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./components/Layout/HomePage";
import { SearchResults } from "./components/GamesCatalog/SearchResults";
import { GameInfo } from "./components/GamesCatalog/GameInfo";
import { MyCart } from "./components/GamesCatalog/MyCart";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="currentGame/:ids" element={<GameInfo />} />
        <Route path="searchResults/" element={<SearchResults />}>
          <Route path=":nam" element={<SearchResults />}></Route>
        </Route>
        <Route path="gameInfo" element={<GameInfo />}></Route>
        <Route path="myCart" element={<MyCart />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
