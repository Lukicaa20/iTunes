import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Show = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.slice(0, 10).map((song) => {
          return (
            <div className="song">
              <img src={song.artworkUrl100} alt="" />
              <p>{song.artistName}</p>
              <p>{song.trackName}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Show;
