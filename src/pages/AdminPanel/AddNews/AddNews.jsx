import React, { useEffect, useState } from 'react';
import './AddNews.scss';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addNews } from '../../../redux/Reducer/newsSlice';
import { useNavigate } from 'react-router-dom';

function AddNews() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);



  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...images, ...files];

    setImages(newImages);

    const newImagePreviews = newImages.map((file) => URL.createObjectURL(file));
    setImagePreviews(newImagePreviews);
  };

  const getNews = async()=>{
const response = await axios.get('http://localhost:8080/news');
dispatch(addNews(response.data));
setTitle(response.data.title);
setText(response.data.text);
  };

  useEffect(()=>{
    getNews();
  },[]);

  const handleSendNews = async () => {
    const news = {
      title: title,
      text: text,
      images: images.map((image) => (`/assets/product/${image.name}`))
    };

    try {
      await axios.post('http://localhost:8080/news', news);
      dispatch(addNews(news));
      navigate('/sucsessAddNews');
    } catch (error) {
      console.log('не удалось загрузить новости');
    }
  };

  return (
    <section className="news__admin">
      <div className="news__banner">
        <label className="label" htmlFor="add__img">добавить изображение на баннер</label>
        <input
          type="file"
          accept=".gif, .jpg, .jpeg, .webp"
          className="add__img"
          id="add__img"
          multiple
          onChange={handleImageChange}
        />
        <div className="preview__container">
          {imagePreviews.map((preview, index) => (
            <img key={index} src={preview} alt="Selected" className="preview__img" />
          ))}
        </div>
      </div>
        <div  className="new__text" style={{ color: "#444" }}>
          <form className='new__form' style={{ color: "#444" }}>
            <input
              type="text"
              placeholder="Добавьте заголовок новости"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='new__input'
              style={{ color: "#444" }}
            />
            <textarea
              name="news text"
              placeholder="добавьте текст новости"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className='new__textarea'
              style={{ color: "#444" }}
            />
          </form>
        </div>
      <button className="login__btn" onClick={handleSendNews}>Опубликовать новости</button>
    </section>
  );
}

export default AddNews;
