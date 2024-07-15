import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Login.scss';
import axios from 'axios';
import { loginUser, logoutUser } from '../../redux/Reducer/users';
import Google from '../../images/google.png';
import Yandex from '../../images/Yandex.png';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState({});
  const [userStatus, setUserStatus] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setUserStatus(parsedUser.status);
    }

    const handleSiteExit = async () => {
      if (user.user && user.user.id) {
        await updateStatus(user.user.id, false);
      }
    };

    window.addEventListener('beforeunload', handleSiteExit);
    return () => {
      window.removeEventListener('beforeunload', handleSiteExit);
    };
  }, [user.user]);

  const updateStatus = async (userId, status) => {
    try {
      await axios.patch(`http://localhost:8080/users/${userId}`, { status });
      setUserStatus(status);
    } catch (error) {
      console.error('Unable to update status', error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    const loginUserDetails = { email, password };

    try {
      const { data } = await axios.post('http://localhost:8080/login', loginUserDetails);
      if (data) {
        dispatch(loginUser(data));
        await updateStatus(data.user.id, true);
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/');
      } else {
        setErrorMessage('Неверный логин или пароль');
      }
    } catch {
      setErrorMessage('Неверный логин или пароль');
    }
  };

  const logout = async () => {
    if (user && user?.user && user?.user?.id) {
      await updateStatus(user.user.id, false);
      dispatch(logoutUser());
    }
      localStorage.removeItem('user');
      setUser({});
      navigate('/login');
    
  };

  return (
    <section className='login'>
      <div className="login__container">
        <h1 className="login__title">Войти</h1>
        <Link to='/' className="login__back">На Главную</Link>
        <form onSubmit={login} className="login__form">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder='Введите email'
            className="login__input"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='Введите пароль'
            className="login__input"
            required
          />
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
        {user.user?.userName && (
          <button onClick={logout} className="logout__btn">Выйти</button>
        )}
      </div>
    </section>
  );
}

export default Login;
