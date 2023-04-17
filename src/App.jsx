import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./components/Layout/HomePage";
import { SearchResults } from "./components/GamesCatalog/SearchResults";
import { GameInfo } from "./components/GamesCatalog/GameInfo";
import { MyCart } from "./components/GamesCatalog/MyCart";
import { PageNotFound } from "./components/Layout/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="currentGame/:ids" element={<GameInfo />} />
        <Route path="searchResults/" element={<SearchResults />}>
          <Route path=":title" element={<SearchResults />} />
        </Route>
        <Route path="gameInfo" element={<GameInfo />} />
        <Route path="myCart" element={<MyCart />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
