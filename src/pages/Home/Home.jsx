// Home.js
import React, { useState, useEffect } from 'react';
import FirstBlock from './FirstBlock/FirstBlock';
import Basic from './Basic/Basic';
import './Home.scss';
import HowWeWork from './HowWeWork/HowWeWork';
import HowWeDo from './HowWeDo/HowWeDo';
import HomeOrder from './HomeOrder/HomeOrder';
import News from './News/News';

import BtnUp from '../../images/toUp.png';

function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='home'>
      {showButton && (
        <button className='btn__up' onClick={scrollToTop}>
          <img src={BtnUp} alt='' className='btn__up-img' />
        </button>
      )}
      <FirstBlock />
      <Basic />
      <HowWeWork />
      <HowWeDo />
      <HomeOrder />
      <News />
    </div>
  );
}

export default Home;
