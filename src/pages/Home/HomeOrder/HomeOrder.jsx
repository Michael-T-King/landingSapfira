import React from 'react'
import { Link, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleClicks } from '../../../Layout/Header/Header'

import './HomeOrder.scss'

function HomeOrder() {
  const dispatch = useDispatch();
  const clicks = useSelector((state) => state.clickSlice.clicks);

  return (

          <section>
      <div className="container">
      <h1 className="home__title home__title-margin">Заказать:</h1>

      <div className='home__order-box'>
        <p className='home__order-text'>Хотите купить наши украшения или заказать под себя со своим дизайном или идеями?
         <Link to='/Cart'  onClick={() => handleClicks('homeOrder', clicks, dispatch)} className='home__do-order'>Заполните форму заказа на сайте,</Link>
         <br/> укажите нужные параметры, и мы свяжемся с вами для подтверждения.</p>
      </div>
      </div>
    </section>

  )
}

export default HomeOrder