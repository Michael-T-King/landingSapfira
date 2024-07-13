import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../../../../redux/Reducer/newsSlice';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.scss';

function SimpleSwiper() {
  const dispatch = useDispatch();
  const images = useSelector(state => state.newsSlice.data.images || []);
  const [localImages, setLocalImages] = useState([]);

  const initializeSwiper = () => {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 7000,
      },
    });
  };

  useEffect(() => {
    if (images.length) {
      setLocalImages(images);
      initializeSwiper();
    }
  }, [images]);

  const getImage = async () => {
    try {
      const response = await axios.get('http://localhost:8080/news');
      dispatch(addNews(response.data)); 
    } catch (error) {
      console.error('Unable to load images');
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div className="container">
      <div className="swiper">
        <div className="swiper-wrapper">
          {localImages.map((src, idx) => (
            <div key={idx} className="swiper-slide">
              <img src={src} alt={`slide-${idx}`} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper__btn swiper-button-prev"></div>
        <div className="swiper__btn swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
}

export default SimpleSwiper;
