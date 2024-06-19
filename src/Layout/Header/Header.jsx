import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import Logo from '../../images/sapfira-light.png';
import LogoViolet from '../../images/sapfira-violet.png';
import BlueGuy from '../../images/header-img.png';

const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [location]);


  const isSelected = (path) => {
    return location.pathname === path ? 'selected' : '';
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };


  const [logoSrc, setLogoSrc] = useState(Logo);

  useEffect(() => {
    const titles = document.querySelectorAll('.header__titles');
    const img = document.querySelector('.header__box-right');

    const animateTitles = () => {
      titles.forEach((title, index) => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            title.classList.add('animate');
          }, index * 300);
        });
      });
    };

    const animateImg = () => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          img.classList.add('animate');
        }, 500);
      });
    };

    animateTitles();
    animateImg();

    return () => {
      titles.forEach(title => title.classList.remove('animate'));
      img.classList.remove('animate');
    };
  }, []);

  const handleMouseOver = () => {
    setTimeout(() => {
      setLogoSrc(LogoViolet);
    }, 200);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      setLogoSrc(Logo);
    }, 200);
  };

  return (
    <div className="header__box">
      <div className='container'>
        <div className="nav">
        <Link to ='/'><img 
            src={logoSrc} 
            alt="Logo" 
            className="nav__img" 
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut} 
          /></Link>
          <ul className="nav__list">
            <li className="nav__items"><Link to ='/'>ГЛАВНАЯ</Link></li>
            <li className="nav__items">КОНТАКТЫ</li>
            <li className="nav__items">ДОСТАВКА</li>
            <li className="nav__items" ><Link to ='/Cart'>ОСТАВИТЬ ЗАЯВКУ</Link></li>
            <li onClick={user? logout : navigate('/login')}><Link to='/login' className={isSelected('/login')}>{user ? 'ВЫЙТИ' : 'ВОЙТИ'}</Link></li>
            <li className="nav__items">{user?.user.userName}</li>
          </ul>
        </div>
        <div className='header__banner-box'>
          <div className="header__box-left">
            <h1 className='header__left-title header__titles'>Украшения и сувениры из полимерной глины на заказ,</h1>
            <h2 className="header__left-giscription header__titles">изготавливаем с любовью и творчеством.</h2>
            <h2 className="header__left-text header__titles">Исскуство в каждой детали</h2>
          </div>
          <div className="header__box-right">
            <img src={BlueGuy} alt="Logo" />
          </div>
        </div>
          <div className='admin__btn' style={{ display: user?.user.userName === 'admin' ? 'block' : 'none' }}>
  {user?.user.userName === 'admin' &&
    <div><Link to='/AdminPanel'>панель Администратора</Link></div>
  }
          </div>
      </div>
    </div>
  );
};

export default Header;
