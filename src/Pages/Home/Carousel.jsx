import heroCarousel1 from '../../assets/HeroCarousel/heroCarousel1.jpg'
import heroCarousel2 from '../../assets/HeroCarousel/heroCarousel2.jpg'
import heroCarousel3 from '../../assets/HeroCarousel/heroCarousel3.jpg'
import heroCarousel4 from '../../assets/HeroCarousel/heroCarousel4.jpg'
import heroCarousel5 from '../../assets/HeroCarousel/heroCarousel5.jpg'


import './Slider.scss'

const Carousel = () => {
  return (
    <div className="slider-wrapper">
      <div className='slider-content'> 
      <img src={heroCarousel1} alt={`img ${heroCarousel1}`}/>
      <img src={heroCarousel2}  alt={`img ${heroCarousel2}`}/>
      <img src={heroCarousel3}  alt={`img ${heroCarousel3}`}/>
      <img src={heroCarousel4}  alt={`img ${heroCarousel4}`}/>
      <img src={heroCarousel5}  alt={`img ${heroCarousel5}`}/>

      </div>
    </div>
  );
}

export default Carousel;
