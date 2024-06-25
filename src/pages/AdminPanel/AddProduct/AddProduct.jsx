import React, { useState } from 'react';
import './AddProduct.scss';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllProducts } from '../../../redux/Reducer/products.js';

function AddProduct() {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [avaleble, setAvailable] = useState(false);
  const [article, setArticle] = useState('');
  const [imagePreviw, setImagePreview] = useState('');

  const dispatch = useDispatch();

  const Product = async (event) => {
    event.preventDefault();
    const newProduct = {
      category,
      name,
      price,
      description,
      avaleble,
      article,
      done: false,
      image
    };
    try {
      await axios.post('http://localhost:8080/products', newProduct);
      dispatch(setAllProducts(newProduct));
    } catch (error) {
      console.log('Ошибка добавления товара', error);
    }
  };

  const handleImageChange = (e) => {
    const fileName = e.target.files[0].name;
    setImage(`/assets/product/${fileName}`);

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
    <section className='product'>
      <form onSubmit={Product} className="add__product-form">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="product__input" required>
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
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="product__input" placeholder='Название' required/>
        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="product__input" placeholder='Цена' required/>
        <input value={article} onChange={(e) => setArticle(e.target.value)} type="text" className="product__input" placeholder='Артикул' required/>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="product__textarea" placeholder='Описание товара' required></textarea>
        <input type="file" accept="image/png, image/jpeg" onChange={handleImageChange} className='add__image' required />
        {image && <img src={imagePreviw} alt="Preview" className='preview__img' />}
        <div className='checkbox__box'>
          <input checked={avaleble} onChange={(e) => setAvailable(e.target.checked? "true": "false")} type="checkbox" id='product__checkbox' className="product__checkbox" required/>
          <label htmlFor="product__checkbox">в наличии</label>
        </div>
        <button type='submit' className="login__btn margin__btn">Добавить товар</button>
      </form>
    </section>
  );
}

export default AddProduct;
