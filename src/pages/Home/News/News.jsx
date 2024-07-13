import React, { useState, useEffect} from 'react'
import Swiper from './Swiper/Swiper'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addNews } from '../../../redux/Reducer/newsSlice'

import './News.scss'

function News() {
  const dispatch = useDispatch();
const [news, setNews] = useState([]);

const GetNews = async()=>{
  try {

    const responce = await axios.get('http://localhost:8080/news');
dispatch(addNews(responce.data));
setNews(responce.data)

  }catch(error) {
    console.log ('unable to load news')
  }
}

useEffect(()=>{
  GetNews();
},[])

  return (
    <section className='news'>
    <div className='container'>
      <h1 className="home__title home__title-margin">Новости</h1>
      <Swiper/>
  
     <div className='news__box'>
        <h1 className="home__title">{news.title}</h1>
        <p className="news__text">{news.text}
</p>
    </div>
  </div>
</section>
  )
}

export default News