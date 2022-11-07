import React from "react";
import { Routes, Route } from "react-router";
import Layout from "./Layout";
import { HomePage } from "./components/Routing/HomePage";
import { SearchResults } from "./components/Routing/SearchResults";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getBoardGamesData } from "./Redux/actions/apiActions";
import { GameInfo } from "./components/Routing/GameInfo";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      setLoaded(true);

      return dispatch(getBoardGamesData());
    };
    getData().catch(setLoaded(true), setError(error));
  }, [dispatch, error]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="searchResults" element={<SearchResults />}></Route>
          <Route path="gameInfo" element={<GameInfo />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
