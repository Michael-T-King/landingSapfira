import React from 'react'
import './FirstBlock.scss'
import Pic from '../../../images/10.jpg'


function FirstBlock() {
  return (
    <section>
      <div className='container'>
    <div className='welcome__container'>
    <div className='welcome__text'>
      <h3 className='welcome'>Добро пожаловать в мир украшений из полимерной глины, где каждое изделие — это уникальное произведение искусства, созданное с любовью и вниманием к деталям. Здесь вы сможете познакомиться с нашей коллекцией украшений и узнать больше о процессе их создания.
      </h3>
      <img src={Pic} alt="" className="welcome__img" />
    </div>

    </div>
      </div>
    </section>
  )
}

export default FirstBlock