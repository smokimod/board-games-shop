import { useState } from "react";
import React from "react";
import "../../styles/GameInfo.css";

export const GameInfo = () => {
  const [open, setOpen] = useState(true);
  return (
    <section className="gameInfo-block">
      <div className="gameInfo-container">
        <div className="gameInfo-details">
          <div className="game-info">
            <div>
              <h2>Name</h2>
              <img
                className="game-image"
                src={require("../../styles/images/autumn-park-leaves-sun-1053614486.jpg")}
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
                    <td>1" x 2"</td>
                  </tr>
                  <tr>
                    <td>Playtime</td>
                    <td>6 унций</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>желтоватый</td>
                  </tr>
                  <tr>
                    <td>Additional Info</td>
                    <td>Используется редко</td>
                  </tr>
                  <tr>
                    <td>Publisher</td>
                    <td>Используется редко</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="game-description">
              <div className="ui top attached tabular green menu">
                <a
                  onClick={() => setOpen(!open)}
                  className={`item ${open ? "active" : ""}`}
                >
                  Description{" "}
                </a>
                <a
                  onClick={() => setOpen(!open)}
                  className={`item ${open ? "" : "active"}`}
                >
                  Hint
                </a>
              </div>
              <div
                className="ui bottom attached segment"
                style={{ fontSize: "18px" }}
              >
                {open
                  ? "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum"
                  : " isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}
              </div>
            </div>
          </div>
          <div className="game-order">
            <h2>Name</h2>
            <div>Estimate:</div>
            <hr />
            <div>Price:</div>
            <div>Stock: {Math.floor(Math.random() * 50)}</div>
            <button class="ui labeled icon orange button">
              <i className="shop icon"></i>
              Add to cart
            </button>
            <button class="ui labeled icon orange button">
              <i class="heart icon"></i>
              Add to WishList
            </button>
            <div className="game-share">
              Share:
              <button class="ui vk button">
                <i class="vk icon"></i> VK
              </button>
              <button class="ui instagram button">
                <i class="instagram icon"></i> Instagram
              </button>
              <button class="ui facebook button">
                <i class="facebook icon"></i>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
{
  /* <span>Players count:</span>
                <span></span>
              </div>
              <div>
                <span>Session time:</span>
                <span></span>
              </div>
              <div>
                <span>Publisher:</span>
                <span></span>
              </div>
              <div>
                <span>Age:</span>
                <span></span>
              </div> */
}
