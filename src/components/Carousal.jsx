import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const Carousal = ({images}) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-inner">
        <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      </div>
      <button className="prev-button" onClick={prevSlide}>
        <ChevronLeftIcon style={{ color: '#ffffff', width: '20px', height: '20px' }}/>
      </button>
      <button className="next-button" onClick={nextSlide}>
        <ChevronRightIcon style={{ color: '#ffffff', width: '20px', height: '20px' }}/>
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousal;
