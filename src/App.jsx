import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { HomePage } from "./components/Routing/HomePage";
import { SearchResults } from "./components/Routing/SearchResults";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBoardGamesData } from "./Redux/actions/apiActions";
import { GameInfo } from "./components/Routing/GameInfo";
import { MyCart } from "./components/Routing/MyCart";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getData = async () => {
  //     return dispatch(getBoardGamesData());
  //   };
  //   getData();
  // }, [dispatch]);

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
