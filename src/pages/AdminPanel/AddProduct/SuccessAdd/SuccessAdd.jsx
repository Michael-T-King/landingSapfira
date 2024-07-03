import React from 'react'

import '../../../Cart/SuccessOrder/SuccessOrder.scss'
import { Link } from 'react-router-dom';


function SuccessAdd() {
  return (
      <section className='success'>
  <div className='container'>
    <div className="success__box">
      <h1 className="success__text">Товар успешно добавлен</h1>
    <Link to = '/AdminPanel'  className='success__link'>Назад</Link>
    </div>
  </div>
      </section>
    )
  }

export default SuccessAdd