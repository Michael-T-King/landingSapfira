import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clicksCounter } from '../../redux/Reducer/clickSlice';
import axios from 'axios';
import Logo from '../../images/sapfira-light.png';
import LogoViolet from '../../images/sapfira-violet.png';
import BlueGuy from '../../images/header-img.png';
import { addUserState } from '../../redux/Reducer/userStateSlice';


const getClicks = async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8080/clicks');
    dispatch(clicksCounter(response.data));
  } catch (error) {
    console.error('Ошибка при получении кликов:', error);
  }
};

const Clicks = async (updatedClicks, dispatch) => {
  console.log('Отправка данных на сервер:', updatedClicks);

  try {
    const response = await axios.patch('http://localhost:8080/clicks', updatedClicks);
    console.log('Ответ сервера:', response.data);
    dispatch(clicksCounter(response.data));
  } catch (error) {
    console.error('Ошибка при добавлении кликов:', error);
  }
};

export const handleClicks = (value, clicks, dispatch) => {
  const updatedClicks = { ...clicks };

  switch (value) {
    case 'logo1':
      updatedClicks.logo1 += 1;
      break;
    case 'main':
      updatedClicks.main += 1;
      break;
    case 'contacts':
      updatedClicks.contacts += 1;
      break;
    case 'delivery':
      updatedClicks.delivery += 1;
      break;
    case 'cart':
      updatedClicks.cart += 1;
      break;
    case 'login':
      updatedClicks.login += 1;
      break;
    case 'mainPick':
      updatedClicks.mainPick += 1;
      break;
    case 'firstBlock':
      updatedClicks.firstBlock += 1;
      break;
    case 'homeOrder':
      updatedClicks.homeOrder += 1;
      break;
    case 'secondBlock':
      updatedClicks.secondBlock += 1;
      break;
      case 'footerLogo':
        updatedClicks.footerLogo += 1;
        break;
    case 'footerMain':
        updatedClicks.footerMain += 1;
        break;
    case 'footerContacts':
        updatedClicks.footerContacts += 1;
        break;
    case 'footerDelivery':
        updatedClicks.footerDelivery += 1;
        break;
    case 'footerCart':
          updatedClicks.footerCart += 1;
          break;
    case 'developer':
          updatedClicks.developer += 1;
          break;
    case 'vk':
          updatedClicks.vk += 1;
          break;
    case 'whatsapp':
        updatedClicks.whatsapp += 1;
        break;
    case 'telegram':
        updatedClicks.telegram += 1;
        break;
    case 'btnUp':
        updatedClicks.btnUp += 1;
        break;
    default:
      console.log('Неизвестное значение:', value);   
  }

  Clicks(updatedClicks, dispatch);
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clicks = useSelector((state) => state.clickSlice.clicks);
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [userStatus, setUserStatus] = useState([]);

  useEffect(() => {
    updateStatus(user?.user?.id, true);
  }, [dispatch, user]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [location]);

  const isSelected = (path) => {
    return location.pathname === path ? 'selected' : '';
  };

  const updateStatus = async (userId, status) => {
    try {
      await axios.patch(`http://localhost:8080/users/${userId}`, { status });
      console.log(`Status updated to ${status}`);
    } catch (error) {
      console.error('Unable to update status', error);
    }
  };

  useEffect(()=>{
  const handleSiteExit = async () => {
    if (user?.user && user?.user?.id) {
      await updateStatus(user?.user?.id, false);
    }
  };

  window.addEventListener('beforeunload', handleSiteExit);
  return () => {
    window.removeEventListener('beforeunload', handleSiteExit);
  };
}, [user?.user]);

  const logout = async () => {
    if (user && user?.user && user?.user?.id) {
      await updateStatus(user?.user?.id, false);
    }
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
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
      titles.forEach((title) => title.classList.remove('animate'));
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
          <Link to='/'><img src={logoSrc} alt="Logo" className="nav__img" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={() => handleClicks('logo1', clicks, dispatch)} /></Link>
          <ul className="nav__list">
            <li onClick={() => handleClicks('main', clicks, dispatch)} className="nav__items"><Link to='/'>ГЛАВНАЯ</Link></li>
            <li onClick={() => handleClicks('contacts', clicks, dispatch)} className="nav__items"><Link to=''>КОНТАКТЫ</Link></li>
            <li onClick={() => handleClicks('delivery', clicks, dispatch)} className="nav__items">ДОСТАВКА</li>
            <li onClick={() => handleClicks('cart', clicks, dispatch)} className="nav__items"><Link to='/Cart'>ОСТАВИТЬ ЗАЯВКУ</Link></li>
            <li onClick={(event) => { logout(); handleClicks('login', clicks, dispatch) }}><Link to='/login' className={isSelected('/login')}>{user ? 'ВЫЙТИ' : 'ВОЙТИ'}</Link></li>
            <li className="nav__items">{user?.user.userName}</li>
          </ul>
        </div>
        <div className='header__banner-box'>
          <div className="header__box-left">
            <h1 className='header__left-title header__titles'>Украшения и сувениры из полимерной глины на заказ,</h1>
            <h2 className="header__left-giscription header__titles">изготавливаем с любовью и творчеством.</h2>
            <h2 className="header__left-text header__titles">Искусство в каждой детали</h2>
          </div>
          <div onClick={() => handleClicks('mainPick', clicks, dispatch)} className="header__box-right">
            <img src={BlueGuy} alt="Logo" />
          </div>
        </div>
        <div className='admin__btn' style={{ display: user?.user.userName === 'admin' ? 'block' : 'none' }}>
          {user?.user.userName === 'admin' && <div><Link to='/AdminPanel'>панель Администратора</Link></div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
