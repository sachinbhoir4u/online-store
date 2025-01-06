import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const ScrollToTopButton = () => {
  // State to control visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position
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
          onClick={scrollToTop}
          // style={{
          //   position: 'fixed',
          //   bottom: '20px',
          //   right: '20px',
          //   padding: '15px',
          //   backgroundColor: '#47a951',
          //   color: 'white',
          //   borderRadius: '50%',
          //   border: 'none',
          //   cursor: 'pointer',
          //   display: 'flex',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
          //   fontSize: '24px',
          //   zIndex: 1000,
          // }}
        >
          <ChevronUpIcon style={{ width: '24px', height: '24px' }} />
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
