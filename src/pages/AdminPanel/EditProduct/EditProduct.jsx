import React, { useState } from 'react';
import './EditProduct.scss';
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllProducts, removeProduct } from '../../../redux/Reducer/products.js';
import { useNavigate } from 'react-router-dom';

function EditProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [article, setArticle] = useState("");
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState("");
  const [avaleble, setAvailable] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [id, setId] = useState("");

  const GetArticle = (e) => {
    e.preventDefault();

    axios.get('http://localhost:8080/products')
      .then(({ data }) => {
        dispatch(setAllProducts(data));
        const product = data.find(product => product.article === article);
        if (product) {
          setProduct(product);
          setCategory(product.category);
          setAvailable(product.available === true);
          setId(product.id);
          setImage(product.image);
          setName(product.name);
          setPrice(product.price);
          setDescription(product.description);
        } else {
          setProduct(null);
          setCategory("");
          setAvailable(false);
          setImagePreview("");
        }
      })
      .catch(() => {
        console.log('Ошибка при получении данных');
      });
  };

  const handleCheckboxChange = (e) => {
    setAvailable(e.target.checked);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const Edit = async (e) => {
    e.preventDefault();

    const EditData = {
      category,
      name,
      price,
      article,
      description,
      image,
      avaleble
    };

    try {
      await axios.patch(`http://localhost:8080/products/${id}`, EditData);
      dispatch(setAllProducts(await axios.get('http://localhost:8080/products').then(res => res.data)));
      navigate('/SuccessEdit');
    } catch (error) {
      console.log('Ошибка добавления товара', error);
    }
  };

  const deleteProduct = async () => {
    try {
      await axios.delete(`http://localhost:8080/products/${id}`);
      dispatch(removeProduct(id));
      setProduct(null);
    } catch {
      console.log("Ошибка при удалении товара");
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

      {product ? (
        <form className="edit__product" onSubmit={Edit}>
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
            <input onChange={(e) => setName(e.target.value)} type="text" id='name' className='product__input' value={name} placeholder="Название" />
            <label htmlFor="name">Название</label>
          </div>

          <div className='input__box'>
            <input onChange={(e) => setPrice(e.target.value)} type="text" id='price' className='product__input' value={price} placeholder="Цена" />
            <label htmlFor="price">Цена</label>
          </div>

          <div className='input__box'>
            <input onChange={(e) => setArticle(e.target.value)} type="text" id='article' className='product__input' value={article} placeholder="Артикул" />
            <label htmlFor="article">Артикул</label>
          </div>

          <div className='input__box'>
            <textarea onChange={(e) => setDescription(e.target.value)} id='description' className='product__textarea' value={description} placeholder="Описание" />
            <label htmlFor="description">Описание</label>
          </div>

          <div className='image__server-box'>
            {product.image && <img src={product.image} alt={product.name} className='find__img' />}
            <p>изображение товара</p>
          </div>

          <div className='image__box'>
            <input onChange={handleImageChange} type="file" accept="image/png, image/jpeg" className='edit__image' id='edit__image' />
            {imagePreview && <img src={imagePreview} alt="Preview" className='preview__img' />}
          </div>

          <div className='checkbox__box'>
            <input type="checkbox" id='product__checkbox' className="product__checkbox" checked={avaleble} onChange={handleCheckboxChange} />
            <label htmlFor="product__checkbox">{avaleble ? 'Нажмите чтобы отметить как "Нет в наличии"' : 'Нажмите чтобы отметить как "В наличии"'}</label>
          </div>
          <div className='buttons__box'>
            <button type="submit" className="login__btn btn">Изменить</button>
            <button type="button" onClick={deleteProduct} className="login__btn btn">Удалить</button>
          </div>
        </form>
      ) : (
        <p>Продукт с артикулом {article} не найден</p>
      )}
    </section>
  );
}

export default EditProduct;
