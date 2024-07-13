import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/Reducer/users';
import { loginUser } from '../../redux/Reducer/users';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [notAllMatch, setNotAllMatch] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUsers = async (event) => {
    event.preventDefault();

    const allFieldsFilled = email && password && confirmPassword && userName && phone;

    if (allFieldsFilled) {
      if (password === confirmPassword) {
        let user = {
          userName,
          email,
          phone,
          password
        };
        try {
          const { data } = await axios.post('http://localhost:8080/users', user);
          dispatch(registerUser({ obj: data }));
          
          // Автоматический вход после регистрации
          const loginUserDat = {
            email,
            password,
            status: true
          };
          const loginResponse = await axios.post('http://localhost:8080/Login', loginUserDat);
          if (loginResponse.data) {
            dispatch(loginUser(data));
            localStorage.setItem('user', JSON.stringify(loginResponse.data));
            navigate('/');
          } else {
            alert('Login error after registration');
          }
        } catch (error) {
          alert('Registration error:', error);
        }
      } else {
        setPasswordMatch(false); 
      }
    } else {
      setNotAllMatch(false); 
    }
  };

  return (
    <section className='login'>
      <div className="login__container register__container">
        <h1 className="login__title">Зарегистрироваться</h1>
        <Link to='/Login' className="login__back">НАЗАД</Link>
        <form onSubmit={registerUsers} className="login__form">
          <input 
            onChange={(e) => {
              setEmail(e.target.value);
              setPasswordMatch(true); 
              setNotAllMatch(true);
            }}
            type="email" 
            placeholder='Введите email' 
            className={`login__input ${!notAllMatch && 'error'}`} 
            required
          />
          
          <input 
            onChange={(e) => {
              setPassword(e.target.value); 
              setNotAllMatch(true);
              setPasswordMatch(e.target.value === confirmPassword);
            }} 
            type="password" 
            placeholder='Введите пароль' 
            className={`login__input ${!passwordMatch && 'error'}`} 
            required
          />

          <input 
            onChange={(e) => {
              setConfirmPassword(e.target.value); 
              setNotAllMatch(true);
              setPasswordMatch(e.target.value === password);
            }} 
            type="password" 
            placeholder='Повторите пароль' 
            className={`login__input ${!passwordMatch && 'error'}`} 
            required
          />  

          <input 
            onChange={(e) => {
              setUserName(e.target.value); 
              setNotAllMatch(true);
            }} 
            type="text" 
            placeholder='Введите имя пользователя' 
            className={`login__input ${!notAllMatch && 'error'}`} 
            required
          />  

          <input 
            onChange={(e) => {
              setPhone(e.target.value); 
              setNotAllMatch(true);
            }} 
            type="tel" 
            placeholder='Введите номер телефона' 
            className={`login__input ${!notAllMatch && 'error'}`} 
            required
          />

          {!notAllMatch && <p className="error-message">Заполните все поля</p>}
          {!passwordMatch && <p className="error-message">Пароли не совпадают</p>}
          <button type="submit" className="login__btn">Зарегистрироваться</button>
        </form>
      </div>
    </section>
  );
}

export default Registration;
