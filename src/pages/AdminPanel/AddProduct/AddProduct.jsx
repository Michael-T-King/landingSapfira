import React, { useState } from 'react';
import './AddProduct.scss'
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import {setAllProducts} from '../../../redux/Reducer/products.js'

function AddProduct() {

const [category, setCategory] = useState();
const [name, setName] = useState();
const [image, setImage] = useState();
const [price, setPrice] = useState();
const [description, setDescription] = useState();
const [avaleble, setAvaleble] = useState();
const [article, setArticle] = useState();

const dispatch = useDispatch();

const Product = async(event) =>{
  event.preventDefault();
  const newProduct = {
     category,
     name,
     price,
     description,
     avaleble,
     article,
     done: "false",
     image
  }
  try {
    await axios.post('http://localhost:8080/products', newProduct)
    dispatch(setAllProducts(newProduct));

  } catch {
    console.log ('ошибка добавления товара')
  }  
};

const handleSubmit = (e) => {
  e.preventDefault();
};



  return (
    <section className='product'>

<form  onSubmit={handleSubmit} action="" className="add__product-form">
<select onChange={(e) => setCategory(e.target.value)} className="product__input">
  <option value="">Выберите категорию товара</option>
  <option value="braslets">Браслеты</option>
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

      <input onChange={(e)=>{setName(e.target.value)}} type="text" className="product__input" placeholder='Название' />
      <input onChange={(e)=>{setPrice(e.target.value)}} type="text" className="product__input" placeholder='Цена' />
      <input onChange={(e)=>{setArticle(e.target.value)}} type="text" className="product__input" placeholder='Артикул' />
      <textarea onChange={(e)=>{setDescription(e.target.value)}} name="" id="" className="product__textarea"></textarea>
      <input onChange={(e) => {const fileName = e.target.value.split('\\').pop(); setImage(`/assets/product/${fileName}`);}} type="file" accept="image/png, image/jpeg"></input>
    <div className='checkbox__box'>
        <input onChange={(e) => { setAvaleble(e.target.checked ? "true" : "false") }} type="checkbox" id='product__checkbox' className="product__checkbox"/>
  
        <label htmlFor="product__checkbox">в наличии</label>
    </div>
      <button onClick={Product} type='submit' className="product__btn">Добавить товар</button>

</form>
    
    </section>
  )
}

export default AddProduct