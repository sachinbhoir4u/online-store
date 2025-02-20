import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <div>
        <button className='scroll-to-top'
          onClick={scrollToTop}>
          <ChevronUpIcon style={{ width: '24px', height: '24px' }} />
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
