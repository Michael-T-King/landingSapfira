import React from 'react'
import './basic.scss'

import BrasletPic from '../../../images/product/braslet.jpg'
import Brelok from '../../../images/product/brelok.jpg'
import Brosh from '../../../images/product/6.jpg'
import Kolie from '../../../images/product/16.jpg'
import magnet from '../../../images/product/mini.jpg'
import Desc from '../../../images/discription2.jpg'


function Basic() {
  return (
    <section>
    <div className='container'>

<h2 className="home__title">Наши изделия</h2>

<ul className="basic__list">

  <li className="basic__items">
  <p className='basic__itens-text'>Браслеты</p>
  <ul className="basic__items-products-list">
    <li className="basic__items-product">
      <img src={BrasletPic} alt="" className="basic__items-products-img" />
      <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={BrasletPic} alt="" className="basic__items-products-img" />
    <p className="product__avaleble product__not-avaleble">нет в наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={BrasletPic} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={BrasletPic} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
  </ul>
  <button className="btn__more">ЕЩЕ</button>
  </li>

  <li className="basic__items">
  <p className='basic__itens-text'>Брелоки</p>
  <ul className="basic__items-products-list">
    <li className="basic__items-product">
      <img src={Brelok} alt="" className="basic__items-products-img" />
      <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={Brelok} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={Brelok} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={Brelok} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
  </ul>
  <button className="btn__more">ЕЩЕ</button>
  </li>

  <li className="basic__items">
  <p className='basic__itens-text'>Броши</p>
  <ul className="basic__items-products-list">
    <li className="basic__items-product">
      <img src={Brosh} alt="" className="basic__items-products-img" />
      <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={Brosh} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={Brosh} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={Brosh} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
  </ul>
  <button className="btn__more">ЕЩЕ</button>
  </li>

  <li className="basic__items">
  <p className='basic__itens-text'>Колье</p>
  <ul className="basic__items-products-list">
    <li className="basic__items-product">
      <img src={Kolie} alt="" className="basic__items-products-img" />
      <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={Kolie} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={Kolie} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={Kolie} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
  </ul>
  <button className="btn__more">ЕЩЕ</button>
  </li>

  <li className="basic__items">
  <p className='basic__itens-text'>Магниты</p>
  <ul className="basic__items-products-list">
    <li className="basic__items-product">
      <img src={magnet} alt="" className="basic__items-products-img" />
      <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
  </ul>
  <button className="btn__more">ЕЩЕ</button>
  </li>

  <li className="basic__items">
  <p className='basic__itens-text'>Наборы</p>
  <ul className="basic__items-products-list">
    <li className="basic__items-product">
      <img src={magnet} alt="" className="basic__items-products-img" />
      <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
  </ul>
  <button className="btn__more">ЕЩЕ</button>
  </li>

  <li className="basic__items">
  <p className='basic__itens-text'>Подвески,<br/> Кулоны</p>
  <ul className="basic__items-products-list">
    <li className="basic__items-product">
      <img src={magnet} alt="" className="basic__items-products-img" />
      <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
  </ul>
  <button className="btn__more">ЕЩЕ</button>
  </li>

  <li className="basic__items">
  <p className='basic__itens-text'>Серьги</p>
  <ul className="basic__items-products-list">
    <li className="basic__items-product">
      <img src={magnet} alt="" className="basic__items-products-img" />
      <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
  </ul>
  <button className="btn__more">ЕЩЕ</button>
  </li>

  <li className="basic__items">
  <p className='basic__itens-text'>Сувениры</p>
  <ul className="basic__items-products-list">
    <li className="basic__items-product">
      <img src={magnet} alt="" className="basic__items-products-img" />
      <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
  </ul>
  <button className="btn__more">ЕЩЕ</button>
  </li>

  <li className="basic__items">
  <p className='basic__itens-text'>Разное</p>
  <ul className="basic__items-products-list">
    <li className="basic__items-product">
      <img src={magnet} alt="" className="basic__items-products-img" />
      <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
    <li className="basic__items-product">
    <img src={magnet} alt="" className="basic__items-products-img" />
    <p className="product__avaleble">В наличии</p>
      <p className="basic__product-price">220 p</p>
      <p className="basic__product-more">подробнее</p>
    </li>
  </ul>
  <button className="btn__more">ЕЩЕ</button>
  </li>
</ul>




    </div>
    </section>
  )
}

export default Basic