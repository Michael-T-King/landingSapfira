import React from 'react'
import './successAddNews.scss'
import { Link } from 'react-router-dom';

function successAddNews() {
  return (
    <section className='success'>
<div className='container'>
  <div className="success__box">
    <h1 className="success__text">Новость успешно добавлена!</h1>
  <Link to = '/AdminPanel'  className='success__link'>Назад</Link>
  </div>
</div>
    </section>
  )
}

export default successAddNews