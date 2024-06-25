import React, { useState } from 'react';
import './EditProduct.scss';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllProducts } from '../../../redux/Reducer/products.js';

function EditProduct() {
  const dispatch = useDispatch();
  const [article, setArticle] = useState("");
  const [Product, setProduct] = useState(null); 
  const [category, setCategory] = useState(""); 
  const [avaleble , setAvaleble] = useState("false");

  const GetArticle = (e) => {
    e.preventDefault(); 

    axios.get('http://localhost:8080/products')
      .then(({ data }) => {
        dispatch(setAllProducts(data));
        const product = data.find(product => product.article === article);
        if (product) {
          setProduct(product); 
          setCategory(product.category); 
          setAvaleble(product.avaleble);
        } else {
          setProduct(null); 
          setCategory("");
        }
      })
      .catch(() => {
        console.log('Ошибка при получении данных');
      });
  };

  return (
    <section className='edit__product'>
      <form onSubmit={GetArticle} className="find__product">
        <input onChange={(e) => setArticle(e.target.value)} type="text" className="edit__input" value={article} placeholder="Введите артикул" />
        <button type="submit" className="get__article-btn">Найти</button>
      </form>

      {Product ? (
        <form className="edit__product">
        
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="product__input">
            <option value="" disabled>Выберите категорию товара</option>
            <option value="braslet">Браслеты</option>
            <option value="brelok">Брелоки</option>
            <option value="brosh">Броши</option>
            <option value="kolie">Колье</option>
            <option value="magnet">Магниты</option>
            <option value="kit">Наборы</option>
            <option value="pendant">Подвески, Кулоны</option>
            <option value="earring">Серьги</option>
            <option value="souvenir">Сувениры</option>
            <option value="any">Разное</option>
          </select>

          <div className='input__box'>
            <input type="text" id='name' className='input__product' placeholder={Product.name}/>
            <label htmlFor="name">Название</label>
          </div>

          <div className='input__box'>
            <input type="text" id='price' className='input__product' placeholder={Product.price}/>
            <label htmlFor="price">Цена</label>
          </div>

          <div className='input__box'>
            <input type="text" id='article' className='input__product' placeholder={Product.article}/>
            <label htmlFor="article">Артикул</label>
          </div>

          <div className='input__box'>
            <textarea type="text" id='description' className='input__product' placeholder={Product.description}/>
            <label htmlFor="description">Описание</label>
          </div>


          <input type="file" accept="image/png, image/jpeg" className='edit__image' id='edit__image'/>
          <label htmlFor="edit__image">{Product.image && <img src={Product.image} alt={Product.name} className='find__img' />}</label>

          <div className='checkbox__box'>
          <input checked={avaleble==="true"?true:false} type="checkbox" id='product__checkbox' className="product__checkbox" required/>
          <label htmlFor="product__checkbox">{avaleble==="true"? 'В наличии': 'Нет в наличии'}</label>
        </div>
        </form>
      ) : (
        <p>Продукт с артикулом {article} не найден</p>
      )}
    </section>
  );
}

export default EditProduct;
