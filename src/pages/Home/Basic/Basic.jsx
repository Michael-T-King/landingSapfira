import React, {useEffect, useState} from 'react'
import './basic.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Brelok from '../../../images/product/brelok.jpg'
import Brosh from '../../../images/product/6.jpg'
import Kolie from '../../../images/product/16.jpg'
import magnet from '../../../images/product/mini.jpg'
import {setAllProducts} from '../../../redux/Reducer/products.js'


function Basic() {

const dispatch = useDispatch();
  const {data} = useSelector((state)=>state.products) 
  useEffect(() => {
    const GetProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products'); 
        dispatch(setAllProducts(response.data));
      } catch (error) {
        console.error('Ошибка при загрузке продуктов:', error);
      }
    };
    GetProducts();
  }, [dispatch]);
  
  const Braslets = data.filter((element) => element?.category === 'braslet');
  const [visibleCount, setVisibleCount] = useState(4);

  const showMoreProducts = () => {
    setVisibleCount(Braslets.length); 
  };

  return (
    <section>
    <div className='container'>

<h2 className="home__title">Наши изделия</h2>

<ul className="basic__list">

  <li className="basic__items">
  <p className='basic__itens-text'>Браслеты</p>
  <ul className="basic__items-products-list">

  {Braslets.slice(0, visibleCount).map((el)=>(

  <li className="basic__items-product" key={el.id}> <Link to={`/oneproduct/${el.id}`}>
      <img src={el.image} alt="" className="basic__items-products-img" />
      <p className= {el.avaleble === true?"product__avaleble":"product__avaleble product__not-avaleble"}>{el.avaleble === true? "В наличии" : "Нет в наличии"}</p>
      <p className="basic__product-price">{el.price}</p>
      <p className="basic__product-quantity">1 шт.</p>
      <p className="basic__product-more">{el.name}</p>
      </Link>
    </li>
))}
  </ul>
   {visibleCount < Braslets.length && (
    <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
  )}
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