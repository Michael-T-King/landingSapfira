import React, { useEffect, useRef, useState } from 'react';
import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCartDetails } from '../../redux/Reducer/cartSlice';
import { dataForGraphs } from '../../redux/Reducer/cartSlice';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import products from '../../redux/Reducer/products';

function Cart() {
  const toTitle = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartDetails = useSelector((state) => state.cart.cart);

  const [name, setName] = useState(cartDetails.name);
  const [email, setEmail] = useState(cartDetails.email);
  const [address, setAddress] = useState(cartDetails.address);
  const [phone, setPhone] = useState(cartDetails.phone);
  const [description, setDescription] = useState(cartDetails.description);
  const [error, setError] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  // const [products, setProducts] = useState([]);

  const  dateOrder = new Date();

  useEffect(() => {
    if (toTitle.current) {
      toTitle.current.scrollIntoView({ behavior: 'smooth' });
    }

     setYear(dateOrder.getUTCFullYear());
     setMonth (dateOrder.getUTCMonth() + 1);
     setDay (dateOrder.getUTCDate());

  }, []);

  const Submit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      address,
      phone,
      description,
      products: cartItems,
      year,
      month,
      day
    };

    try {
      const { data } = await axios.post('http://localhost:8080/form', formData);
      if (data) {
        navigate('/Success');
      }
    } catch (error) {
      setError('Ошибка отправки формы');
    }
  };

  const addForGraphs = async(e) => {
    const forGraphs = {
      dateOrder,
      year,
      month,
      day,
      products: cartItems,
    };
try{
const { data } = await axios.post('http://localhost:8080/forGraps', forGraphs);
dispatch(dataForGraphs(data));
  }catch {
  console.log("ошибка записи данных на сервер для графиков")
}
  };

  const FieldChange = (sett, field) => (e) => {
    sett(e.target.value);
    dispatch(setCartDetails({ [field]: e.target.value }));
  };

  const RemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    dispatch(setCartDetails({ cartItems: updatedCartItems}));
  };

  return (
    <section className='cart'>
      <div className="container">
        <div className="cart__box" ref={toTitle}>
          <h1 className="home__title">Форма заявки</h1>

          
          <form onSubmit ={(event) => { Submit(event); addForGraphs(event); }} className="cart__form">
            <input onChange={FieldChange(setName, 'name')} value={name} type="text" className="cart__input" placeholder='Имя, Фамилия' required/>
            <input
              onChange={FieldChange(setEmail, 'email')}
              value={email}
              type="email"
              className="cart__input"
              placeholder='Email'
              required/>
            <input
              onChange={FieldChange(setPhone, 'phone')}
              value={phone}
              type="tel"
              className="cart__input"
              placeholder='Номер телефона'
              required/>
            <input
              onChange={FieldChange(setAddress, 'address')}
              value={address}
              type="text"
              className="cart__input"
              placeholder='Адрес'
              required/>
            <textarea
              onChange={FieldChange(setDescription, 'description')}
              value={description}
              id="cart__textarea"
              placeholder='Описание заказа'
              required/>
              
            <div className="cart__product-box">

              {cartItems.map((item, index) => (
                <div className='cart__product-container'>
                  <div className="cart__items-product" key={index}>
                    <img src={item.image} alt="" className="cart__items-products-img" />
                    <p className="product__available cart__size">В наличии</p>
                    <p className="basic__product-price">{item.price} </p>
                    <p className="basic__product-quantity">1 шт.</p>
                    <p className="basic__product-more">{item.name}</p>
                  
                  </div>
                  <button type='button' onClick={() => RemoveItem(index)} className="basic__product-delete-btn">
                  </button>
                </div>
              ))}
            </div>
            <div className="cart__price-box">
              <h3 className="cart__price-text">Общая цена за выбранные товары:</h3>
              <h2 className="cart__price">{cartItems.length > 0? `${cartItems.reduce((acc, el)=> acc + Number(el.price), 0)}р` : '0р'}</h2>
            </div>
            <div className='agree__box'>
              <input type="checkbox" id="agree" name="agree" required />
              <label htmlFor="agree" className='agree__label'>
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
