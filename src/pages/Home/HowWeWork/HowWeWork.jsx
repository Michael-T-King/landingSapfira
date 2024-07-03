import React, { useEffect, useRef } from 'react';
import './HowWeWork.scss'

import { useDispatch, useSelector } from 'react-redux';
import { handleClicks } from '../../../Layout/Header/Header'

import Desc3 from '../../../images/discription3.jpg'

function HowWeWork() {
  const dispatch = useDispatch();
  const clicks = useSelector((state) => state.clickSlice.clicks);
  const welcomeContainer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate3');
          } else {
            entry.target.classList.remove('animate3');
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
      <div className="container">
      <div className='home__about'>
        <h1 className="home__title">О нас</h1>
          <div onClick={() => handleClicks('secondBlock', clicks, dispatch)} className="home__about-box"  ref={welcomeContainer}>
            <p>Мы — небольшая мастерская, создающая украшения из полимерной глины. Каждое наше изделие сделано с любовью и вниманием к деталям. Мы ценим индивидуальность и стремимся радовать вас качественными и красивыми украшениями.</p>
            <div className='every__steps'>
            <p>Каждый шаг, от выбора материалов до финальной полировки, выполняется вручную нашими мастерами. Мы используем только качественные материалы, чтобы изделия служили вам долго.</p>
            <img src={Desc3} alt="" className="every__steps-img" />
            </div>
          </div>
      </div>
      </div>
    </section>
  )
}

export default HowWeWork