import React from 'react'
import './HomeOrder.scss'

function HomeOrder() {
  return (

          <section>
      <div className="container">
      <h1 className="home__title home__title-margin">Заказать:</h1>

      <div className='home__order-box'>
        <p className='home__order-text'>Хотите купить наши украшения?
         <a href='/' className='home__do-order'>Заполните форму заказа на сайте,</a>
         <br/> укажите нужные параметры, и мы свяжемся с вами для подтверждения.</p>
      </div>
      </div>
    </section>

  )
}

export default HomeOrder