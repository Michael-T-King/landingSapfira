import React, {useState, useEffect, Link } from 'react';
import './Header.scss';
import Logo from '../../images/sapfira-light.png';
import LogoViolet from '../../images/sapfira-violet.png';
import BlueGuy from '../../images/header-img.png';

const Header = () => {
  useEffect(() => {
    const titles = document.querySelectorAll('.header__titles');
    const img = document.querySelector('.header__box-right');

    const animateTitles = () => {
      titles.forEach((title, index) => {
        setTimeout(() => {
          title.classList.add('animate');
        }, index * 300);
      });
    };

    const animateImg = () => {
      setTimeout(() => {
      img.classList.add('animate');
      }, 500);
    };

    window.addEventListener('load', () => {
      animateTitles();
      animateImg();
    });
    

    return () => {
      window.removeEventListener('load', animateTitles);
      window.removeEventListener('load', animateImg);
    };
  }, []);

  const [logoSrc, setLogoSrc] = useState(Logo);

  const handleMouseOver = () => {
    setTimeout (()=>{
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
          <img src={logoSrc} alt="" className="nav__img" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
          <ul className="nav__list">
            <li className="nav__items">ГЛАВНАЯ</li>
            <li className="nav__items">КОНТАКТЫ</li>
            <li className="nav__items">ДОСТАВКА</li>
            <li className="nav__items">ОСТАВИТЬ ЗАЯВКУ</li>
            <li className="nav__items">ВОЙТИ</li>
            <li className="nav__items">имя</li>
          </ul>
        </div>
        <div className='header__banner-box'>
          <div className="header__box-left">
            <h1 className='header__left-title header__titles'>Украшения и сувениры из полимерной глины на заказ,</h1>
            <h2 className="header__left-giscription header__titles">изготавливаем с любовью и творчеством.</h2>
            <h2 className="header__left-text header__titles">Исскуство в каждой детали</h2>
          </div>
          <div className="header__box-right">
          <img src={BlueGuy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
