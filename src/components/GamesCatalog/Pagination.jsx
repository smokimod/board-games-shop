import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@mui/material";
import { useParams, NavLink, useLocation } from "react-router-dom";

import { Loader } from "../Layout/loader/loader";
import { cartHolder } from "../../Redux/reducers/cartReducers";
import { cartDeleter } from "../../Redux/reducers/cartReducers";
import { SearchedGames } from "./SearchedGames.jsx/SearchedGames";
import { SortCondition } from "./SortCondition";

export const PaginationBar = ({ category }) => {
  const clientId = "client_id=VqVYih77GT";
  const sample = useSelector((state) => state.sample.value);
  const cart = useSelector((state) => state.cart.itemsCart);
  const authInfo = useSelector((state) => state.auth.userId);

  const location = useLocation();
  const dispatch = useDispatch();
  const { title } = useParams();
  const [games, setGames] = useState();
  const [skip, setSkip] = useState(0);
  const [pageQty, setPageQty] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(
    parseInt(location.search?.split("=")[1] || 1)
  );
  const addToCart = (item) => {
    const isItemInCart = cart.some((game) => game.id === item.id);
    if (isItemInCart) {
      dispatch(cartDeleter(item));
    } else {
      dispatch(cartHolder(item));
    }
  };

  console.log(loaded);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("user", JSON.stringify(authInfo));
  }, [cart, authInfo]);

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.boardgameatlas.com/api/search?name=${
            sample || title ? title : ""
          }&skip=${skip}&limit=15&exact=false&${clientId}`
        )

        .then(({ data }) => {
          setGames(data.games);
          SortCondition(data, category);
          setPageQty(Math.ceil(data.count / 15));
          setSkip(page * 15 - 15);

          if (Math.ceil(data.count / 15) < page) {
            setPage(1);
          }
          setLoaded(true);
        });
    } catch (error) {
      setLoaded(true);
      setError(error);
    }
  }, [page, skip, pageQty, sample, title, category, setError, setLoaded]);

  return error ? (
    <div className="error-background">
      <i className="thumbs down outline icon"></i>
      Opps...: {error.message}
    </div>
  ) : !loaded ? (
    <Loader />
  ) : (
    <>
      <div className="ui five doubling cards">
        {games && games.length > 0
          ? games.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <SearchedGames
                    id={item.id}
                    name={item.name}
                    price={item.price === "0.00" ? item.price_uk : item.price}
                    image={item.image_url}
                    item={item}
                    addToCart={addToCart}
                    isItemInCart={cart.some((game) => {
                      return game.id === item.id;
                    })}
                  />
                </React.Fragment>
              );
            })
          : games}
      </div>
      <div className="ui center  aligned segment">
        {!!pageQty && (
          <Pagination
            sx={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              mx: 0.5,
              fontSize: 14,
            }}
            size="large"
            count={pageQty > 50 ? 50 : pageQty}
            page={page}
            onChange={(_, i) => setPage(i)}
            showFirstButton
            showLastButton
            boundaryCount={2}
            siblingCount={1}
            renderItem={(item) => (
              <PaginationItem
                component={NavLink}
                to={`/searchResults${
                  title || sample ? `/${title}` || `/${sample}` : ""
                }${item.page === 1 ? "" : `/?page=${item.page}`}`}
                {...item}
              />
            )}
          />
        )}
      </div>
    </>
  );
};
