import React from 'react'
import { Link, } from 'react-router-dom';

import './HomeOrder.scss'

function HomeOrder() {
  return (

          <section>
      <div className="container">
      <h1 className="home__title home__title-margin">Заказать:</h1>

      <div className='home__order-box'>
        <p className='home__order-text'>Хотите купить наши украшения?
         <Link to='/Cart' className='home__do-order'>Заполните форму заказа на сайте,</Link>
         <br/> укажите нужные параметры, и мы свяжемся с вами для подтверждения.</p>
      </div>
      </div>
    </section>

  )
}

export default HomeOrder