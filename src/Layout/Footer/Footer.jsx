import React, { useState } from 'react';
import './Footer.scss';
import Logo from '../../images/sapfira-light.png';
import LogoViolet from '../../images/sapfira-violet.png';
import VK from '../../images/vk.png';
import WhatsApp from '../../images/whatsapp.png';
import Telega from '../../images/telegram.png';

function Footer() {
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
            <img src={logoSrc} alt="Logo" className="footer__logo" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
            <a href="tg://resolve?domain=Lord_Michael_5" className="footer__dev">
              Developer and creator: Michael-T-King
            </a>
          </div>
          
          <ul className="nav__list">
            <li className="nav__items">ГЛАВНАЯ</li>
            <li className="nav__items">КОНТАКТЫ</li>
            <li className="nav__items">ДОСТАВКА</li>
            <li className="nav__items">ОСТАВИТЬ ЗАЯВКУ</li>
          </ul>

          <div className="footer__right-box">
            <div className='soc__box'>
              <a href="/" className="footer__soc">
                <img src={VK} alt="VK" className="soc__img" />
              </a>
              <a href="/" className="footer__soc">
                <img src={WhatsApp} alt="WhatsApp" className="soc__img" />
              </a>
              <a href="/" className="footer__soc">
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
