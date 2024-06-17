import React from 'react'
import './basic.scss'



function Basic() {
  return (
    <section>
    <div className='container'>

<p className="basic__about">Мы — мастерская, создающая украшения из полимерной глины. Каждое наше изделие ручной работы сделано с любовью и вниманием к деталям. Мы ценим индивидуальность и стремимся радовать вас качественными и красивыми украшениями.</p>

<h2 className="basic__colections">Наши изделия</h2>

<ul className="basic__list">
  <li className="basic__items"><p>Браслеты</p> <div className="swiper">
  
</div></li>
  <li className="basic__items">Брелоки</li>
  <li className="basic__items">Броши</li>
  <li className="basic__items">Колье</li>
  <li className="basic__items">Магниты</li>
  <li className="basic__items">Наборы</li>
  <li className="basic__items">Подвески, Кулоны</li>
  <li className="basic__items">Серьги</li>
  <li className="basic__items">Сувениры</li>
  <li className="basic__items">Разное</li>
</ul>




    </div>
    </section>
  )
}

export default Basic