import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import './Login.scss';
import axios from 'axios';

import Google from '../../images/google.png'
import Yandex from '../../images/Yandex.png'

function Login() {

  const {data} = useSelector((state)=>state.products)
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user,setUser] = useState({})

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    }
}, []);

  const login = (e) => {
    e.preventDefault();
    const loginUser = {
      email,
      password
    };

    axios.post('http://localhost:8080/Login', loginUser)
      .then(({ data }) => {
        setUser(data);
        if (data) {
          localStorage.setItem('user', JSON.stringify(data));
          navigate('/');
        } else {
          setErrorMessage('Неверный логин или пароль');
        }
      })
      .catch(error => {
        setErrorMessage('Неверный логин или пароль');
      });
  };

  return (
    <section className='login'>
      <div className="login__container">
        <h1 className="login__title">Войти</h1>
        <Link to='/' className="login__back">НАЗАД</Link>
        <form onSubmit={login} className="login__form">
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Введите email' className="login__input" required />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Введите пароль' className="login__input" required />
          <p className="error-message">{errorMessage}</p>
          <p className="forgot__password">Забыли пароль</p>
          <button type='submit' className="login__btn">Войти</button>
        </form>
        <h3 className="login__with">Войти с помощью</h3>
        <div className="login__with-box">
          <img src={Google} alt="Google" className="login__with-img" />
          <img src={Yandex} alt="Yandex" className="login__with-img" />
        </div>
        <Link to='/Registration' className='registration__link'>Зарегистрироваться</Link>
        <p className='user'>{user.user?.userName}</p>
      </div>
    </section>
  );
}

export default Login;
