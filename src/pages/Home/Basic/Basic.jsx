import React, { useEffect, useState } from 'react';
import './basic.scss';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setAllProducts } from '../../../redux/Reducer/products.js';

function Basic() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data = [] } = useSelector((state) => state.products);

  const [expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products');
        dispatch(setAllProducts(response.data));
      } catch (error) {
        console.error('Ошибка при загрузке продуктов:', error);
      }
    };
    getProducts();
  }, [dispatch, location.pathname]);

  // Filtered data by category
  const braslets = data.filter((element) => element?.category === 'braslet');
  const brelok = data.filter((element) => element?.category === 'brelok');
  const brosh = data.filter((element) => element?.category === 'brosh');
  const kolie = data.filter((element) => element?.category === 'kolie');
  const magnet = data.filter((element) => element?.category === 'magnet');
  const kit = data.filter((element) => element?.category === 'kit');
  const pendant = data.filter((element) => element?.category === 'pendant');
  const earring = data.filter((element) => element?.category === 'earring');
  const souvenir = data.filter((element) => element?.category === 'souvenir');
  const any = data.filter((element) => element?.category === 'any');

  const [visibleCount, setVisibleCount] = useState(4);

  const showMoreProducts = () => {
    setVisibleCount(visibleCount + 4); 
    setExpanded(true);
  };

  const showLessProduct = () => {
    setVisibleCount(4);
    setExpanded(false);
  };

  const renderProducts = (products) => (
    products.slice(0, visibleCount).map((el) => (
      <li className={`basic__items-product ${expanded ? 'expanded' : ''}`} key={el.id}>
        <Link to={`/oneproduct/${el.id}`}>
          <img src={el.image} alt="" className="basic__items-products-img" />
          <p className={el.available ? "product__available" : "product__available product__not-available"}>{el.available ? "В наличии" : "Нет в наличии"}</p>
          <p className="basic__product-price">{el.price}</p>
          <p className="basic__product-quantity">1 шт.</p>
          <p className="basic__product-more">{el.name}</p>
        </Link>
      </li>
    ))
  );

  return (
    <section>
      <div className='container'>
        <h2 className="home__title">Наши изделия</h2>
        <ul className="basic__list">

          <li className="basic__items">
            <p className='basic__itens-text'>Браслеты</p>
            <ul className="basic__items-products-list">
              {renderProducts(braslets)}
            </ul>
            {visibleCount && (
              <>
                <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
                {visibleCount > 4 && <button className="btn__more" onClick={showLessProduct}>Скрыть</button>}
              </>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Брелоки</p>
            <ul className="basic__items-products-list">
              {renderProducts(brelok)}
            </ul>
            {visibleCount < brelok.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Броши</p>
            <ul className="basic__items-products-list">
              {renderProducts(brosh)}
            </ul>
            {visibleCount < brosh.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Колье</p>
            <ul className="basic__items-products-list">
              {renderProducts(kolie)}
            </ul>
            {visibleCount < kolie.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Магниты</p>
            <ul className="basic__items-products-list">
              {renderProducts(magnet)}
            </ul>
            {visibleCount < magnet.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>наборы</p>
            <ul className="basic__items-products-list">
              {renderProducts(kit)}
            </ul>
            {visibleCount < kit.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Подвески, кулоны</p>
            <ul className="basic__items-products-list">
              {renderProducts(pendant)}
            </ul>
            {visibleCount < pendant.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Серьги</p>
            <ul className="basic__items-products-list">
              {renderProducts(earring)}
            </ul>
            {visibleCount < earring.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Сувениры</p>
            <ul className="basic__items-products-list">
              {renderProducts(souvenir)}
            </ul>
            {visibleCount < souvenir.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Разное</p>
            <ul className="basic__items-products-list">
              {renderProducts(any)}
            </ul>
            {visibleCount < any.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

        </ul>
      </div>
    </section>
  );
}

export default Basic;
