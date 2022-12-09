import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

export const SimpleSlider = () => {
  const games = useSelector((state) => state.specials.games);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };

  return (
    <Slider {...settings}>
      {games && games.length > 0
        ? games.map((slide) => {
            return (
              <div
                className="slide"
                key={slide.id}
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{
                    background: `url(${slide.images.original})`,
                    backgroundSize: "100% 550px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "400px",
                    width: "85%",
                  }}
                >
                  <NavLink
                    to={`/currentGame/${slide.id}`}
                    className="slider-info"
                  >
                    <h1 className="slide-title">{slide.name}</h1>
                    <p className="para">
                      {slide.description_preview
                        .split(" ")
                        .slice(0, 124)
                        .join(" ")}
                      ...
                    </p>
                  </NavLink>
                </div>
              </div>
            );
          })
        : games}
    </Slider>
  );
};
export default SimpleSlider;
