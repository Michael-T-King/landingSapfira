import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

import Google from '../../images/google.png'
import Yandex from '../../images/Yandex.png'

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <section className='login'>
      <div className="login__container">

      <h1 className="login__title">Войти</h1>

      <Link to='/' className="login__back">НАЗАД</Link>
      <form action="" className="login__form">

      <input type="email" placeholder='Введите email' className="login__input" required></input>    
      <input type="password" placeholder='Введите пароль' className="login__input" required></input>
      <p className="forgot__password">Забыли пароль</p>    
      <button type='submit' className="login__btn">Войти</button>
      </form>
      <h3 className="login__with">Войти с помощью</h3>
      <div className="login__with-box">
        <img src={Google} alt="Google" className="login__with-img" />
        <img src={Yandex} alt="Yandex" className="login__with-img" />
      </div>
      <Link to='/Registration' className='registration__link'>Зарегистрироваться</Link>
      </div>
    </section>
  )
}

export default Login