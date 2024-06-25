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
  const [avaleble, setAvaleble] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const GetArticle = (e) => {
    e.preventDefault();

    axios.get('http://localhost:8080/products')
      .then(({ data }) => {
        dispatch(setAllProducts(data));
        const product = data.find(product => product.article === article);
        if (product) {
          setProduct(product);
          setCategory(product.category);
          setAvaleble(product.avaleble === "true");
         
        } else {
          setProduct(null);
          setCategory("");
          setAvaleble(false);
          setImagePreview("");
        }
      })
      .catch(() => {
        console.log('Ошибка при получении данных');
      });
  };

  const handleCheckboxChange = (e) => {
    setAvaleble(e.target.checked);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  

  return (
    <section className='edit__product'>
      <form onSubmit={GetArticle} className="find__product">
        <input
          onChange={(e) => setArticle(e.target.value)}
          type="text"
          className="edit__input"
          value={article}
          placeholder="Введите артикул"
        />
        <button type="submit" className="login__btn btn__size">Найти</button>
      </form>

      {Product ? (
        <form className="edit__product">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="product__input"
          >
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
            <input type="text" id='name' className='product__input' placeholder={Product.name} />
            <label htmlFor="name">Название</label>
          </div>

          <div className='input__box'>
            <input type="text" id='price' className='product__input' placeholder={Product.price} />
            <label htmlFor="price">Цена</label>
          </div>

          <div className='input__box'>
            <input type="text" id='article' className='product__input' placeholder={Product.article} />
            <label htmlFor="article">Артикул</label>
          </div>

          <div className='input__box'>
            <textarea id='description' className='product__textarea' placeholder={Product.description} />
            <label htmlFor="description">Описание</label>
          </div>



            <div className='image__server-box'>
            {Product.image && <img src={Product.image} alt={Product.name} className='find__img' />}
            <p>изображение для продукта</p>
            </div>

          <div className='image__box'>
            <input  onChange={handleImageChange} type="file" accept="image/png, image/jpeg" className='edit__image' id='edit__image' />
            {imagePreview && <img src={imagePreview} alt="Preview" className='preview__img' />}
          </div>

          <div className='checkbox__box'>
            <input
              type="checkbox"
              id='product__checkbox'
              className="product__checkbox"
              checked={avaleble}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="product__checkbox">{avaleble ? 'Нажмите чтобы отметить как "Нет в наличии"' : 'Нажмите чтобы отметить как "В наличии"'}</label>
          </div>
          <button className="login__btn btn">Изменить</button>
        </form>
      ) : (
        <p>Продукт с артикулом {article} не найден</p>
      )}
    </section>
  );
}

export default EditProduct;
