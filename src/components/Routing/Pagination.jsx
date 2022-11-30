import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem } from "@mui/material";
import { useParams, NavLink, useLocation } from "react-router-dom";
import { cartHolder } from "../../Redux/reducers/cartReducers";
const clientId = "client_id=VqVYih77GT";

export const PaginationBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { nam } = useParams();
  const sample = useSelector((state) => state.sample.value);
  const [games, setGames] = useState([]);
  const [skip, setSkip] = useState(0);
  const [pageQty, setPageQty] = useState(0);
  const [page, setPage] = useState(
    parseInt(location.search?.split("=")[1] || 1)
  );

  useEffect(() => {
    axios
      .get(
        `https://api.boardgameatlas.com/api/search?name=${
          sample || nam ? nam : ""
        }&skip=${skip}&limit=20&exact=false&${clientId}`
      )
      .then(({ data }) => {
        setGames(data.games);
        setPageQty(Math.ceil(data.count / 20));
        setSkip(page * 20 - 20);
        if (Math.ceil(data.count / 20) < page) {
          console.log(page, pageQty);
          setPage(1);
          // navigate(`/searchResults/${sample || nam ? sample || nam : ""}`);
        }
      })
      .catch((error) => console.log(error.message));
  }, [page, skip, pageQty, nam]);

  const addToCart = (item) => {
    dispatch(cartHolder(item));
  };
  return (
    <>
      <div className="ui five doubling stackable cards">
        {games && games.length > 0
          ? games.map((item) => {
              return (
                <div className="ui yellow card" key={item.id}>
                  <div className="image">
                    <NavLink
                      className="ui link centered card"
                      to={`/currentGame/${item.id}`}
                    >
                      <img
                        src={item.image_url}
                        alt={require("../../styles/images/no_image.png")}
                      />
                    </NavLink>
                  </div>
                  <div className="content">
                    <i className="right floated like icon"></i>
                    <div className="header">{item.name}</div>
                    <div className="meta">
                      <div
                        style={{
                          cursor: "default",
                          color: "green",
                          padding: "5px 0",
                        }}
                      >
                        <i className="green dollar sign large icon">
                          {item.price}
                        </i>
                      </div>
                    </div>
                    <div className="description">
                      {item.description
                        .replace(/<\/?[^>]+(>|$)/g, "")
                        .split(" ")
                        .slice(0, 14)
                        .join(" ")}
                      ...
                    </div>
                  </div>
                  <div className="extra content">
                    <button
                      onClick={() => {
                        addToCart(item);
                      }}
                      className="ui attached yellow button"
                      style={{ color: "black" }}
                    >
                      <i className="shop red icon"></i>
                      Add to Cart
                    </button>
                  </div>
                </div>
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
                  nam || sample ? `/${nam}` || `/${sample}` : ""
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
