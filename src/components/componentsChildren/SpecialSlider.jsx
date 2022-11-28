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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };

  return (
    <>
      <Slider {...settings}>
        {games && games.length > 0
          ? games.map((slide) => {
              return (
                <div
                  className="slide"
                  key={slide.id}
                  tyle={{
                    width: "100%",
                    height: "300px",
                  }}
                >
                  <div
                    style={{
                      backgroundImage: `url(${slide.image_url})`,
                      width: "100%",
                      height: "400px",
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <NavLink
                      to={`/currentGame/${slide.id}`}
                      className="slider-info"
                    >
                      <h1 className="title"> {slide.name} </h1>
                      <p className="para">
                        {slide.description_preview.replace(
                          /<\/?[^>]+(>|$)/g,
                          ""
                        )}
                      </p>
                    </NavLink>
                  </div>
                </div>
              );
            })
          : games}
      </Slider>
    </>
  );
};
export default SimpleSlider;
