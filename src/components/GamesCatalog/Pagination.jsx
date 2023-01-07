import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@mui/material";
import { useParams, NavLink, useLocation } from "react-router-dom";
import { cartHolder } from "../../Redux/reducers/cartReducers";
import { cartDeleter } from "../../Redux/reducers/cartReducers";
import { SearchedGames } from "./SearchedGames.jsx/SearchedGames";
const clientId = "client_id=VqVYih77GT";

export const PaginationBar = () => {
  const sample = useSelector((state) => state.sample.value);
  const cart = useSelector((state) => state.cart.itemsCart);
  const location = useLocation();
  const dispatch = useDispatch();
  const { title } = useParams();
  const [games, setGames] = useState();
  const [skip, setSkip] = useState(0);
  const [pageQty, setPageQty] = useState(0);
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
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const getRequest = () => {
      axios
        .get(
          `https://api.boardgameatlas.com/api/search?name=${
            sample || title ? title : ""
          }&skip=${skip}&limit=15&exact=false&${clientId}`
        )
        .then(({ data }) => {
          setGames(data.games);
          setPageQty(Math.ceil(data.count / 15));
          setSkip(page * 15 - 15);

          if (Math.ceil(data.count / 15) < page) {
            setPage(1);
          }
        })
        .catch((error) => console.log(error.message));
    };
    getRequest();
  }, [page, skip, pageQty, sample, title]);

  return (
    <>
      <div className="ui five doubling cards">
        {games && games.length > 0
          ? games.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <SearchedGames
                    id={item.id}
                    name={item.name}
                    price={item.price}
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
      <div className="ui center aligned segment">
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
            boundaryCount={3}
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
