import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { getBoardGamesData } from "../../Redux/actions/apiActions";
import { PopularGames } from "../MainPageResults/PopularGames";
import { SpecialDeals } from "../MainPageResults/SpecialDeals";
import { AdditionPopularGames } from "../MainPageResults/AdditionPopularGames";
import { ActualRealises } from "../MainPageResults/ActualRealises";
import { Loader } from "./loader/loader";

export const HomePage = () => {
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
      {error ? (
        <div className="error-background">
          <i className="thumbs down outline icon"></i>
          Opps...: {error.message}
        </div>
      ) : !loaded ? (
        <Loader />
      ) : (
        <>
          <SpecialDeals />
          <PopularGames />
          <AdditionPopularGames />
          <ActualRealises />
        </>
      )}
    </>
  );
};
