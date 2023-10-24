import { useState } from "react";
import { assets } from "../../data/Carousal";
import "./Slider.scss";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    setIndex(index > 0 ? index - 1 : assets.length - 1);
  };

  const handleNextClick = () => {
    setIndex(index < assets.length - 1 ? index + 1 : 0);
  };

  return (
    <div className="slider-wrapper">
      <i className="bi bi-arrow-left-circle" onClick={handlePrevClick}></i>
      <div
        className="slider-content"
        style={{ transform: `translateX(${index * -100}vw)`}}
      >
        {assets.map((e, idx) => (
          <div key={idx} className="main"> 
          <img src={e.url} alt={`img ${idx}`} />
          </div> 
        ))}
      </div>
      <i className="bi bi-arrow-right-circle" onClick={handleNextClick}></i>
      <div className="desc-hero">
        <h2 className="main-title"> Welcome to Excava</h2>
        <div></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Carousel;
