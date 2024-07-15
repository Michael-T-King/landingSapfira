import React, { useEffect, useState, useMemo, useCallback } from 'react';
import './basic.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setAllProducts } from '../../../redux/Reducer/products.js';

function Basic() {
  const dispatch = useDispatch();
  const { data = [] } = useSelector((state) => state.products);

  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

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
  }, [dispatch]);

  const categories = useMemo(() => {
    const braslets = [];
    const brelok = [];
    const brosh = [];
    const kolie = [];
    const magnet = [];
    const kit = [];
    const pendant = [];
    const earring = [];
    const souvenir = [];
    const any = [];
    
    data.forEach(element => {
      switch (element.category) {
        case 'braslet': braslets.push(element); break;
        case 'brelok': brelok.push(element); break;
        case 'brosh': brosh.push(element); break;
        case 'kolie': kolie.push(element); break;
        case 'magnet': magnet.push(element); break;
        case 'kit': kit.push(element); break;
        case 'pendant': pendant.push(element); break;
        case 'earring': earring.push(element); break;
        case 'souvenir': souvenir.push(element); break;
        case 'any': any.push(element); break;
        default: break;
      }
    });

    return { braslets, brelok, brosh, kolie, magnet, kit, pendant, earring, souvenir, any };
  }, [data]);

  const showMoreProducts = () => {
    setVisibleCount(visibleCount + 4); 
    setExpanded(true);
  };

  const showLessProducts = () => {
    setVisibleCount(4);
    setExpanded(false);
  };

  const renderProducts = useCallback((products) => (
    products.slice(0, visibleCount).map((el) => (
      <li className={`basic__items-product ${expanded ? 'expanded' : ''}`} key={el.id}>
        <Link to={`/oneproduct/${el.id}`}>
          <img src={el.image} alt="" className="basic__items-products-img" />
          <p className={el.available ? "product__available" : "product__available product__not-available"}>
            {el.available ? "В наличии" : "Нет в наличии"}
          </p>
          <p className="basic__product-price">{el.price}</p>
          <p className="basic__product-quantity">1 шт.</p>
          <p className="basic__product-more">{el.name}</p>
        </Link>
      </li>
    ))
  ), [visibleCount, expanded]);

  return (
    <section>
      <div className='container'>
        <h2 className="home__title">Наши изделия</h2>
        <ul className="basic__list">

          <li className="basic__items">
            <p className='basic__itens-text'>Браслеты</p>
            <ul className="basic__items-products-list">
              {renderProducts(categories.braslets)}
            </ul>
            {visibleCount < categories.braslets.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
            {visibleCount > 4 && <button className="btn__more" onClick={showLessProducts}>Скрыть</button>}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Брелоки</p>
            <ul className="basic__items-products-list">
              {renderProducts(categories.brelok)}
            </ul>
            {visibleCount < categories.brelok.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Броши</p>
            <ul className="basic__items-products-list">
              {renderProducts(categories.brosh)}
            </ul>
            {visibleCount < categories.brosh.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Колье</p>
            <ul className="basic__items-products-list">
              {renderProducts(categories.kolie)}
            </ul>
            {visibleCount < categories.kolie.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Магниты</p>
            <ul className="basic__items-products-list">
              {renderProducts(categories.magnet)}
            </ul>
            {visibleCount < categories.magnet.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>наборы</p>
            <ul className="basic__items-products-list">
              {renderProducts(categories.kit)}
            </ul>
            {visibleCount < categories.kit.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Подвески, кулоны</p>
            <ul className="basic__items-products-list">
              {renderProducts(categories.pendant)}
            </ul>
            {visibleCount < categories.pendant.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Серьги</p>
            <ul className="basic__items-products-list">
              {renderProducts(categories.earring)}
            </ul>
            {visibleCount < categories.earring.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Сувениры</p>
            <ul className="basic__items-products-list">
              {renderProducts(categories.souvenir)}
            </ul>
            {visibleCount < categories.souvenir.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

          <li className="basic__items">
            <p className='basic__itens-text'>Разное</p>
            <ul className="basic__items-products-list">
              {renderProducts(categories.any)}
            </ul>
            {visibleCount < categories.any.length && (
              <button className="btn__more" onClick={showMoreProducts}>Ещё</button>
            )}
          </li>

        </ul>
      </div>
    </section>
  );
}

export default Basic;
