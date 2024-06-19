import React from 'react'
import './SuccessOrder.scss'
import { Link } from 'react-router-dom';

function SuccessOrder() {

  return (
    <section className='success'>
<div className='container'>
  <div className="success__box">
    <h1 className="success__text">Заявка успешно отправлена</h1>
  <Link to = '/'  className='success__link'>Вернуться на главную</Link>
  </div>
</div>
    </section>
  )
}

export default SuccessOrder