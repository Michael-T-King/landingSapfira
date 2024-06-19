import React, { useEffect, useRef } from 'react';
import './Cart.scss'
import Img from '../../images/magnet.jpg'

function Cart() {
  const toTitle = useRef(null);

  useEffect(() => {
    if (toTitle.current) {
      toTitle.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  

  return (
    <section className='cart'>
      <div className="container">
        <div className="cart__box" ref={toTitle}>
          <h1 className="home__title" >Форма заявки</h1>

          <form action="" className="cart__form">
            <input type="name" className="cart__input" placeholder='Имя, Фамилия' required/>
            <input type="email" className="cart__input" placeholder='Email'/>
            <input type="phone" className="cart__input" placeholder='Номер телефона' required/>
            <input type="address" className="cart__input" placeholder='Адрес' required/>
            <textarea name="" id="cart__textarea" placeholder='Описание заказа' required></textarea>
          </form>
          <div className="cart__product-box">

          <div className="cart__items-product">
              <img src={Img} alt="" className="cart__items-products-img" />
              <p className="product__avaleble cart__size">В наличии</p>
              <p className="basic__product-price">220 p</p>
              <p className="basic__product-quantity">1 шт.</p>
              <p className="basic__product-more">Название</p>
            </div>

            <div className="cart__items-product">
              <img src={Img} alt="" className="cart__items-products-img" />
              <p className="product__avaleble cart__size">В наличии</p>
              <p className="basic__product-price">220 p</p>
              <p className="basic__product-quantity">1 шт.</p>
              <p className="basic__product-more">Название</p>
            </div>
          </div>

<div className="cart__price-box">
  <h3 className="cart__price-text">Общая цена за выбранные товары:</h3>
  <h2 className="cart__price">200р</h2>
</div>
          <div className='agree__box'>
            <input type="checkbox" id="agree" name="agree" required />
            <label for="agree" className='agree__lable'><p>Согласиться с</p> <a href='/' className="cart__rules">Правилами оферты</a></label>
          </div>
          
          
          <button className="cart__btn">Отправить заявку</button>
        </div>
      </div>
    </section>
  )
}

export default Cart;
