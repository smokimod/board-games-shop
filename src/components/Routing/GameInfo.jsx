import React from "react";
import "../../styles/GameInfo.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const GameInfo = () => {
  const { ids } = useParams();
  const [open, setOpen] = useState(true);
  const [game, setGame] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.boardgameatlas.com/api/search?ids=${ids}&client_id=VqVYih77GT`
      )
      .then((data) => {
        setGame(data.data);
      });
  }, [ids]);
  return (
    <section className="gameInfo-block">
      <div className="gameInfo-container">
        <div className="gameInfo-details">
          <div className="game-info">
            <div>
              <h2>{game.games ? game.games[0].name : null}</h2>
              <img
                className="game-image"
                src={game.games ? game.games[0].image_url : null}
                alt="logo"
              />
            </div>
            <div className="game-charecters">
              <h4 className="ui horizontal divider header">
                <i className="bar chart icon"></i>Game Description
              </h4>
              <table className="ui definition blue table">
                <tbody>
                  <tr>
                    <td className="two wide column">Players</td>
                    <td>{game.games ? game.games[0].players : null}</td>
                  </tr>
                  <tr>
                    <td>Playtime</td>
                    <td>
                      {game.games ? `${game.games[0].playtime} (Min)` : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>
                      {game.games ? `${game.games[0].min_age} (Years)` : null}
                    </td>
                  </tr>
                  <tr>
                    <td>BGG Rank</td>
                    <td>
                      {game.games ? (
                        <i className="star large icon">{game.games[0].rank} </i>
                      ) : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Publisher</td>
                    <td>
                      {game.games ? `${game.games[0].year_published} y.` : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="game-description">
              <div className="ui top attached tabular menu">
                <NavLink
                  onClick={() => setOpen(!open)}
                  className={`item ${open ? "active" : ""}`}
                >
                  Description{" "}
                </NavLink>
                <NavLink
                  onClick={() => setOpen(!open)}
                  className={`item ${open ? "" : "active"}`}
                >
                  Hint
                </NavLink>
              </div>
              <div
                className="ui bottom attached segment"
                style={{ fontSize: "18px" }}
              >
                {open
                  ? game.games
                    ? game.games[0].description_preview.replace(
                        /<\/?[^>]+(>|$)/g,
                        ""
                      )
                    : null
                  : game.games
                  ? game.games[0].description.replace(/<\/?[^>]+(>|$)/g, "")
                  : null}
              </div>
            </div>
          </div>
          <div className="game-order">
            <h2>{game.games ? game.games[0].name : null}</h2>
            <div>
              <i className="star large yellow icon" />
              {game.games ? game.games[0].average_user_rating.toFixed(1) : null}
            </div>
            <div style={{ color: "green" }}>
              $ {game.games ? game.games[0].price : null}
            </div>
            <hr />

            <div>Stock: {Math.floor(Math.random() * 50)}</div>
            <button className="ui labeled icon orange button">
              <i className="shop icon"></i>
              Add to cart
            </button>
            <button className="ui labeled icon orange button">
              <i className="heart icon"></i>
              Add to WishList
            </button>
            <div className="game-share">
              Share:
              <button className="ui vk button">
                <i className="vk icon"></i> VK
              </button>
              <button className="ui instagram button">
                <i className="instagram icon"></i> Instagram
              </button>
              <button className="ui facebook button">
                <i className="facebook icon"></i>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
