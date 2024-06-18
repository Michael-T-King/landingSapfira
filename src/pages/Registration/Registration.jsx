import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.scss'

function Registration() {
  return (
    <section className='login'>
    <div className="login__container register__container">

    <h1 className="login__title">Зарегистрироваться</h1>

    <Link to='/Login' className="login__back">НАЗАД</Link>
    <form action="" className="login__form">

    <input type="email" placeholder='Введите email' className="login__input" required></input>    
    <input type="password" placeholder='Введите пароль' className="login__input" required></input>
    <input type="password" placeholder='Повторите пароль' className="login__input" required></input>
    <input type="userName" placeholder='Введите имя пользователя' className="login__input" required></input>
    <input type="phone" placeholder='Введите номер телефона' className="login__input" required></input>
  
    <button className="login__btn">Войти</button>
    </form>
    </div>
  </section>
  )
}

export default Registration