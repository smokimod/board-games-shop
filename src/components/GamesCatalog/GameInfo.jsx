import React, { useEffect, useState } from "react";
import "../../styles/GameInfo.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartHolder, cartDeleter } from "../../Redux/reducers/cartReducers";
import { GameInfoDescription } from "./GameInfoDescription/GameInfoDescription";

export const GameInfo = () => {
  const dispatch = useDispatch();
  const { ids } = useParams();
  const [game, setGame] = useState([]);
  const cart = useSelector((state) => state.cart.itemsCart);

  useEffect(() => {
    axios
      .get(
        `https://api.boardgameatlas.com/api/search?ids=${ids}&pretty=true&limit=1&client_id=VqVYih77GT`
      )
      .then((data) => {
        setGame(data.data.games);
      });
  }, [ids]);

  const addToCart = (item) => {
    const isItemInCart = cart.some((game) => game.id === item.id);
    if (isItemInCart) {
      dispatch(cartDeleter(item.id));
    } else {
      dispatch(cartHolder(item));
    }
  };
  return (
    <section className="gameInfo-block">
      {game && game.length >= 0
        ? game.map((item) => (
            <GameInfoDescription
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image_url}
              publisher={item.primary_publisher.name}
              year={item.year_published}
              time={item.playtime}
              players={item.players}
              rank={item.rank}
              url={item.official_url}
              addToCart={addToCart}
              item={item}
              isItemInCart={cart.some((game) => {
                return game.id === item.id;
              })}
            />
          ))
        : null}
    </section>
  );
};
