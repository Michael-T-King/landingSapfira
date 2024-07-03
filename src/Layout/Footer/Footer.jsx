import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import Logo from '../../images/sapfira-light.png';
import LogoViolet from '../../images/sapfira-violet.png';
import VK from '../../images/vk.png';
import WhatsApp from '../../images/whatsapp.png';
import Telega from '../../images/telegram.png';

import { useDispatch, useSelector } from 'react-redux';
import { handleClicks } from '../../Layout/Header/Header'

function Footer() {
  const dispatch = useDispatch();
  const clicks = useSelector((state) => state.clickSlice.clicks);

  const [logoSrc, setLogoSrc] = useState(Logo);

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
    <div className="footer">
      <div className='container'>
        <div className='footer__box'>
          <div className='footer__left-box'>
          <Link to ='/' onClick={() => handleClicks('footerLogo', clicks, dispatch)}><img src={logoSrc} alt="Logo" className="footer__logo" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} /></Link>
            <a onClick={() => handleClicks('developer', clicks, dispatch)} href="tg://resolve?domain=Lord_Michael_5" className="footer__dev">
              Developer and creator: Michael-T-King
            </a>
          </div>
          
          <ul className="nav__list">
            <li onClick={() => handleClicks('footerMain', clicks, dispatch)} className="nav__items"><Link to ='/'>ГЛАВНАЯ</Link></li>
            <li onClick={() => handleClicks('footerContacts', clicks, dispatch)} className="nav__items">КОНТАКТЫ</li>
            <li onClick={() => handleClicks('footerDelivery', clicks, dispatch)} className="nav__items">ДОСТАВКА</li>
            <li onClick={() => handleClicks('footerCart', clicks, dispatch)} className="nav__items"><Link to ='/Cart' onClick={() => handleClicks('footerCart', clicks, dispatch)}>ОСТАВИТЬ ЗАЯВКУ</Link></li>
          </ul>

          <div className="footer__right-box">
            <div className='soc__box'>
              <a onClick={() => handleClicks('vk', clicks, dispatch)} href="/" className="footer__soc">
                <img src={VK} alt="VK" className="soc__img" />
              </a>
              <a onClick={() => handleClicks('whatsapp', clicks, dispatch)} href="/" className="footer__soc">
                <img src={WhatsApp} alt="WhatsApp" className="soc__img" />
              </a>
              <a onClick={() => handleClicks('telegram', clicks, dispatch)} href="/" className="footer__soc">
                <img src={Telega} alt="Telegram" className="soc__img" />
              </a>
            </div>

            <p className="copyright">SAPFIRA © 2024 Все права защищены.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
