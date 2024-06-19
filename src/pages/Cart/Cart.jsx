import React, { useEffect, useRef, useState } from 'react';
import './Cart.scss';
import Img from '../../images/magnet.jpg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Reducer/cartSlice';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Cart() {
  const toTitle = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [product, setProduct] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    if (toTitle.current) {
      toTitle.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      address,
      phone,
      description,
      product 
    };

    try {
      const { data } = await axios.post('http://localhost:8080/form', formData);
      dispatch(addToCart(data));
      if(data) navigate('/Success');

    } catch (error) {
      setError('Ошибка отправки формы');
    }
  };

  return (
    <section className='cart'>
      <div className="container">
        <div className="cart__box" ref={toTitle}>
          <h1 className="home__title">Форма заявки</h1>
          <form onSubmit={handleSubmit} className="cart__form">
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="cart__input" placeholder='Имя, Фамилия' required/>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="cart__input"
              placeholder='Email'
              required
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="tel"
              className="cart__input"
              placeholder='Номер телефона'
              required
            />
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              type="text"
              className="cart__input"
              placeholder='Адрес'
              required
            />
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              id="cart__textarea"
              placeholder='Описание заказа'
              required
            />
            <div className="cart__product-box">
              <div className="cart__items-product">
                <img src={Img} alt="" className="cart__items-products-img" />
                <p className="product__avaleble cart__size">В наличии</p>
                <p className="basic__product-price">220 р</p>
                <p className="basic__product-quantity">1 шт.</p>
                <p  className="basic__product-more" >Название</p>
              </div>
              <div className="cart__items-product">
                <img src={Img} alt="" className="cart__items-products-img" />
                <p className="product__avaleble cart__size">В наличии</p>
                <p className="basic__product-price">220 р</p>
                <p className="basic__product-quantity">1 шт.</p>
                <p className="basic__product-more" >Назва</p>
              </div>
            </div>
            <div className="cart__price-box">
              <h3 className="cart__price-text">Общая цена за выбранные товары:</h3>
              <h2 className="cart__price">200р</h2>
            </div>
            <div className='agree__box'>
              <input type="checkbox" id="agree" name="agree" required />
              <label htmlFor="agree" className='agree__lable'>
                <p>Согласиться с</p> <a href='/' className="cart__rules">Правилами оферты</a>
              </label>
            </div>
            <button type="submit" className="cart__btn">Отправить заявку</button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default Cart;
