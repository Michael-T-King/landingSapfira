import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch, } from 'react-redux';
import { setCurrentProduct } from '../../redux/Reducer/products';

import './oneProduct.scss';

const OneProduct = () => {
  let location = useLocation()
  let id =  location.pathname.split('/').at(-1)
  const dispatch = useDispatch();
  const { currentProduct } = useSelector((state) => state.products);
  const Product = currentProduct;
  useEffect(() => {
    const getOneProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/products/${id}`);
        dispatch(setCurrentProduct(response.data));
      } catch (error) {
        console.error('Ошибка при загрузке продукта:', error);
      }
    };
    getOneProduct();
  }, [dispatch, id]);

  if (!Product) {
    return <p className='one__product'>Загрузка...</p>;
  }

  return (
    <section>
      <div className="container">
        <div>
          <h2 className='one__product'>{Product.name}</h2>
          <h2 className='one__product'>{Product.category}</h2>
          <img src={Product.image} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default OneProduct;
