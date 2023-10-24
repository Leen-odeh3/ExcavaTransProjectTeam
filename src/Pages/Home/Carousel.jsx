import { assets } from '../../data/Carousal';

const Carousel = () => {
  return (
    <div className="slider-wrapper">
      <div className='slider-content'>
        {assets.map((e, index) => (
          <img src={e.url} alt={`carousal-img-${index}`} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
