// Home.js
import React, { useState, useEffect } from 'react';
import FirstBlock from './FirstBlock/FirstBlock';
import Basic from './Basic/Basic';
import './Home.scss';
import HowWeWork from './HowWeWork/HowWeWork';
import HowWeDo from './HowWeDo/HowWeDo';
import HomeOrder from './HomeOrder/HomeOrder';
import News from './News/News';

import { useDispatch, useSelector } from 'react-redux';
import { handleClicks } from '../../Layout/Header/Header'

import BtnUp from '../../images/toUp.png';

function Home() {
  const dispatch = useDispatch();
  const clicks = useSelector((state) => state.clickSlice.clicks);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
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
        <button className='btn__up' onClick={(event) => {{scrollToTop(event)}; {handleClicks('btnUp', clicks, dispatch, event)}}}>
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
