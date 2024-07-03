import React, { useEffect, useRef, useState } from 'react';
import './FirstBlock.scss';
import Pic from '../../../images/10.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { handleClicks } from '../../../Layout/Header/Header'
function FirstBlock() {
  const welcomeContainer = useRef(null);
  const dispatch = useDispatch();
  const clicks = useSelector((state) => state.clickSlice.clicks);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate2');
          } else {
            entry.target.classList.remove('animate2');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (welcomeContainer.current) {
      observer.observe(welcomeContainer.current);
    }

    return () => {
      if (welcomeContainer.current) {
        observer.unobserve(welcomeContainer.current);
      }
    };
  }, []);

  return (
    <section>
      <div className='container'>
        <div onClick={() => handleClicks('firstBlock', clicks, dispatch)}  className='welcome__container' ref={welcomeContainer}>
          <div className='welcome__text'>
            <h3 className='welcome'>
              Добро пожаловать в мир украшений из полимерной глины, где каждое изделие — это уникальное произведение искусства, созданное с любовью и вниманием к деталям. Здесь вы сможете познакомиться с нашей коллекцией украшений и узнать больше о процессе их создания.
            </h3>
            <img src={Pic} alt="" className="welcome__img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstBlock;
