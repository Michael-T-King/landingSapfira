import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.scss'



function SimpleSwiper() {

  useEffect(() => {
const swiper = new Swiper('.swiper', {
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
}, []);

  return (
<div className="container">
<div class="swiper">

  <div class="swiper-wrapper">

    <div class="swiper-slide">
    Slide 1
    </div>
    <div class="swiper-slide">
    Slide 2
    </div>
    <div class="swiper-slide">
    Slide 3
    </div>

  </div>
  <div  class="swiper-pagination"></div>
  <div class="swiper__btn swiper-button-prev"></div>
  <div class="swiper__btn swiper-button-next"></div>
  <div class="swiper-scrollbar"></div>
</div>
</div>
  );
}

export default SimpleSwiper;
