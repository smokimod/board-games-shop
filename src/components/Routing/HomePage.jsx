import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getBoardGamesData } from "../../Redux/actions/apiActions";
import { PopularGames } from ".././mainPage/PopularGames";
import { SpecialDeals } from ".././mainPage/SpecialDeals";
import { AdditionPopularGames } from "../mainPage/AdditionPopularGames";
import { ActualRealises } from "../mainPage/ActualRealises";

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
        <div className="loader-position">
          <div className="ui massive active centered inline loader">
            Loading...
          </div>
        </div>
      ) : (
        <>
          <SpecialDeals />
          {/* <PopularGames /> */}
          <AdditionPopularGames />
          <ActualRealises />
        </>
      )}
    </>
  );
};
