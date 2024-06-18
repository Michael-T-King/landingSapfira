import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.scss';
import axios from 'axios';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [notAllMatch, setNotAllMatch] = useState(true);

  const navigate = useNavigate();

  const registerUser = (event) => {
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
        axios.post('http://localhost:8080/users', user)
          .then(response => {
            navigate('/Login'); 
          })
          .catch(error => {
            console.error('Registration error:', error);
          });
      } else {
        setPasswordMatch(false); 
      }
    } 
    else {
      setNotAllMatch(false); 
    }
  };

  return (
    <section className='login'>
      <div className="login__container register__container">
        <h1 className="login__title">Зарегистрироваться</h1>
        <Link to='/Login' className="login__back">НАЗАД</Link>
        <form action="" className="login__form">

          <input onChange={(e) => {setEmail(e.target.value);setPasswordMatch(true); setNotAllMatch(true);}}
            type="email" placeholder='Введите email' className={`login__input ${!passwordMatch && 'error'}`} required/>
          
          <input onChange={(e) => { setPassword(e.target.value); setNotAllMatch(true);
              if (e.target.value === confirmPassword) {
                setPasswordMatch(true);
              } else {
                setPasswordMatch(false);
              }
            }} type="password" placeholder='Введите пароль' className={`login__input ${!passwordMatch && 'error'}}`} required/>

          <input onChange={(e) => { setConfirmPassword(e.target.value); setNotAllMatch(true);
              if (e.target.value === password) {
                setPasswordMatch(true);
              } else {
                setPasswordMatch(false);
              }
            }} type="password" placeholder='Повторите пароль' className={`login__input ${!passwordMatch && 'error'}`} required/>  

          <input onChange={(e) => { setUserName(e.target.value); setNotAllMatch(true);}} type="text" placeholder='Введите имя пользователя' className={`login__input `} required/>  

          <input onChange={(e) => { setPhone(e.target.value); setNotAllMatch(true);}} type="tel" placeholder='Введите номер телефона' className={`login__input `} required/>

          {!notAllMatch&& <p className="error-message">Заполните все поля</p>}
          {!passwordMatch && <p className="error-message">Пароли не совпадают</p>}
          <button onClick={registerUser} className="login__btn">Зарегистрироваться</button>
        </form>
      </div>
    </section>
  );
}

export default Registration;
